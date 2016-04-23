
var exports = module.exports = {};

exports.indexScripts = `
    <!------------------------------------------------------------------------------------------------------------------
        {PASCAL_CASE_MODULE_NAME} Module
     ------------------------------------------------------------------------------------------------------------------>
    <script src="modules/{SNAKE_CASE_MODULE_NAME}/{PASCAL_CASE_MODULE_NAME}Module.js"></script>
    <script src="modules/{SNAKE_CASE_MODULE_NAME}/Routes.js"></script>

    <script src="modules/{SNAKE_CASE_MODULE_NAME}/controllers/{PASCAL_CASE_MODULE_NAME}DashboardController.js"></script>

    `;

exports.styleImport = `@import "../modules/{SNAKE_CASE_MODULE_NAME}/styles/{CAMEL_CASE_MODULE_NAME}Module.scss";
`;

exports.moduleImport = `,
    '{CAMEL_CASE_MODULE_NAME}Module'`;
