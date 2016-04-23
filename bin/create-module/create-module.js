var exports = module.exports = {};

var placeholders = require('./placeholders'),
    fm = require('./file-manipulator'),
    fs = require('fs'),
    mv = require('mv'),
    ncp = require('ncp').ncp,
    inquirer = require('inquirer'),
    Q = require('q');

exports.run = function() {

    // Present the questions configured above
    inquirer.prompt(promptQuestions, function(responses) {
        var moduleName = responses.moduleName,
            placeholderModulePath = __dirname + '/../../placeholder_module/',
            destinationModulePath = __dirname + '/../../app/modules/' + moduleName + '/';

        placeholderReplacements = {
            snakeCaseModule: moduleName,
            camelCaseModule: convertSnakeCaseToCamelCase(moduleName),
            pascalCaseModule: convertSnakeCaseToPascalCase(moduleName),
            routeUri: responses.routeUri
        };

        // Copy the placeholder module to the new location
        ncp(placeholderModulePath, destinationModulePath, function(err) {
            if (err) {
                return console.log(err);
            }

            var fileRenamePromises = [],
                filesToRename = [
                    {
                        src: destinationModulePath + placeholderFilepaths.module,
                        destBase: destinationModulePath,
                        destFilename: placeholderReplacements.pascalCaseModule + placeholderFilepaths.module,
                        replaceKeys: true
                    },
                    {
                        src: destinationModulePath + placeholderFilepaths.controller.replace('{MODULE_NAME}', ''),
                        destBase: destinationModulePath,
                        destFilename: placeholderFilepaths.controller.replace('{MODULE_NAME}', placeholderReplacements.pascalCaseModule),
                        replaceKeys: true
                    },
                    {
                        src: destinationModulePath + placeholderFilepaths.style.replace('{MODULE_NAME}', ''),
                        destBase: destinationModulePath,
                        destFilename: placeholderFilepaths.style.replace('{MODULE_NAME}', placeholderReplacements.camelCaseModule),
                    }
                ];

            filesToRename.forEach(function(file) {
                fileRenamePromises.push(
                    renameFile(file)
                );
            });

            Q.all(fileRenamePromises)
                .then(function() {

                    // Replace the placeholder values within the module files
                    performStringReplacements(destinationModulePath);

                    // Add the required entries to the index.html file
                    editIndexFile(destinationModulePath);

                    // Register the newly created module in the app.js file
                    editAppFile(destinationModulePath);

                    // Include the new module's style file in the main SCSS file
                    editMainStyleFile(destinationModulePath);
                });
        });
    });
};

// Map of placeholder filenames from the app directory
var placeholderFilepaths = {
    index: 'index.html',
    appScript: 'scripts/app.js',
    baseStyle: 'styles/main.scss',
    module: 'Module.js',
    controller: '/controllers/{MODULE_NAME}DashboardController.js',
    style: '/styles/_{MODULE_NAME}Module.scss'
};

// Collection of placeholders to replace, and keys in the generated object to map to
var stringReplacements = [
    {
        regex: new RegExp('{SNAKE_CASE_MODULE_NAME}', 'g'),
        key: 'snakeCaseModule'
    },
    {
        regex: new RegExp('{CAMEL_CASE_MODULE_NAME}', 'g'),
        key: 'camelCaseModule'
    },
    {
        regex: new RegExp('{PASCAL_CASE_MODULE_NAME}', 'g'),
        key: 'pascalCaseModule'
    },
    {
        regex: new RegExp('{ROUTE_URI}', 'g'),
        key: 'routeUri'
    }
];

var placeholderReplacements = null;

// List of files to parse, replacing placeholder strings. Filenames are relative to the module root
var filesToParse = [
    'Routes.js',
    'templates/sidebar.html'
];

// User-presented questions
var promptQuestions = [
    {
        type: "input",
        name: "moduleName",
        message: "What is the name of the module in snake case? (e.g. \"risk_register\")",
        validate: function(value) {
            return value.length ? true : "This is required";
        }
    },
    {
        type: "input",
        name: "routeUri",
        message: "What is the route URI segment for the base of this module? (e.g. \"risk-register\")",
        validate: function(value) {
            return value.length ? true : "This is required";
        }
    }
];

function renameFile(file) {

    var deferred = Q.defer();

    mv(
        file.src,
        file.destBase + file.destFilename,
        { mkdirp: true },
        function(err) {
            if (err) console.log(err);

            if (file.replaceKeys) {
                filesToParse.push(file.destFilename);
            }

            deferred.resolve();
        }
    );

    return deferred.promise;
}

function performStringReplacements(moduleBasePath) {

    filesToParse.forEach(function(fileName) {
        replaceFilePlaceholders(moduleBasePath + '/' + fileName);
    });
}

function editIndexFile(moduleBasePath) {

    var placeholder = placeholders.indexScripts,
        indexFilePath = moduleBasePath + '../../' + placeholderFilepaths.index;

    // Replace any string placeholders in the insert string
    placeholder = replacePlaceholders(placeholder);

    return fm.insert(
        indexFilePath,
        placeholder,
        '<!-- starter:module:script -->'
    );
}

function editAppFile(moduleBasePath) {

    var placeholder = placeholders.moduleImport,
        filepath = moduleBasePath + '../../' + placeholderFilepaths.appScript;

    placeholder = replacePlaceholders(placeholder);

    return fm.insert(
        filepath,
        placeholder,
        '/* starter:module:module */'
    );
}

function editMainStyleFile(moduleBasePath) {

    var placeholder = placeholders.styleImport,
        filepath = moduleBasePath + '../../' + placeholderFilepaths.baseStyle;

    placeholder = replacePlaceholders(placeholder);

    return fm.insert(
        filepath,
        placeholder,
        '/* starter:module:style */'
    );
}

function replaceFilePlaceholders(fileName) {

    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }

        data = replacePlaceholders(data);

        fs.writeFile(fileName, data, 'utf8', function(err) {
            if (err) return console.log(err);
        });
    });
}

function replacePlaceholders(data) {

    stringReplacements.forEach(function(replacement) {
        data = data.replace(replacement.regex, placeholderReplacements[replacement.key]);
    });

    return data;
}


// ---------------------------------------------------------------------------------------------------------------------
// Utilities

function convertSnakeCaseToCamelCase(string) {
    return string.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
}

function convertSnakeCaseToPascalCase(string) {
    string = convertSnakeCaseToCamelCase(string);

    return string.charAt(0).toUpperCase() + string.slice(1);
}
