(function () {
    'use strict';

    angular
        .module('{CAMEL_CASE_MODULE_NAME}Module')
        .config(function($stateProvider) {
            $stateProvider

                /**
                 * Module base state
                 */
                .state('app.{SNAKE_CASE_MODULE_NAME}', {
                    abstract: true,
                    url: '/{ROUTE_URI}',
                    views: {
                        sidebar: {
                            templateUrl: 'modules/{SNAKE_CASE_MODULE_NAME}/templates/sidebar.html'
                        }
                    }
                })

                .state('app.{SNAKE_CASE_MODULE_NAME}.dashboard', {
                    url: '',
                    views: {
                        'body@app': {
                            templateUrl: 'modules/{SNAKE_CASE_MODULE_NAME}/templates/dashboard.html',
                            controller: '{PASCAL_CASE_MODULE_NAME}DashboardController'
                        }
                    }
                });
        });
})();
