var exports = module.exports = {};

var fs = require('fs'),
    Q = require('q');

/**
 * Insert a string before a given string within a specified file
 *
 * @param filepath
 * @param data
 * @param hookString
 */
exports.insert = function(filepath, data, hookString) {
    var deferred = Q.defer(),
        fileContents = fs.readFileSync(filepath).toString(),
        insertPosition = fileContents.indexOf(hookString);

    if (-1 === insertPosition) {
        deferred.reject('Unable to find the hook string ' + hookString + ' in file' + filePath);
    }

    fileContents = fileContents.slice(0, insertPosition) + data + fileContents.slice(insertPosition);

    fs.writeFile(filepath, fileContents, 'utf8', function(err) {
        if (err) {
            deferred.reject("An error occurred whilst writing the file: " + err);
        }

        deferred.resolve();
    });

    return deferred.promise;
};
