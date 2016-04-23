(function () {
    'use strict';

    angular
        .module('{CAMEL_CASE_MODULE_NAME}Module')
        .controller(
            '{PASCAL_CASE_MODULE_NAME}DashboardController',
            Controller
        );

    /**
     * {PASCAL_CASE_MODULE_NAME} Dashboard Controller
     *
     * @param $scope
     * @constructor
     */
    function Controller($scope) {

        $scope.message = '{PASCAL_CASE_MODULE_NAME} Dashboard';
    }
})();
