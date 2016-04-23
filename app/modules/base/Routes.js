(function () {
    'use strict';

    angular
        .module('baseModule')
        .config(function($stateProvider) {
            $stateProvider

                /**
                 * Application base state
                 */
                .state('app', {
                    abstract: true,
                    views: {
                        index: {
                            templateUrl: 'modules/base/templates/template.html',
                            controller: 'BaseController'
                        }
                    }
                });
        });
})();
