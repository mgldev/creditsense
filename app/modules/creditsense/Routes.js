(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .config(function($stateProvider) {
            $stateProvider

                .state('app.data', {
                    abstract: true,
                    url: '/data',
                    views: {
                        sidebar: {
                            templateUrl: 'modules/creditsense/templates/sidebar.html'
                        }
                    }
                })

                .state('app.data.accounts', {
                    url: '/accounts',
                    views: {
                        'body@app': {
                            templateUrl: 'modules/creditsense/templates/data/accounts.html',
                            controller: 'AccountsController'
                        }
                    }
                });
        });
})();
