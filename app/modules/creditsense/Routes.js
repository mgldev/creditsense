(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .config(function($stateProvider) {
            $stateProvider

                /**
                 * My Data routes
                 */
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
                })

                /**
                 * My Score routes
                 */
                .state('app.score', {
                    abstract: true,
                    url: '/score',
                    views: {
                        sidebar: {
                            templateUrl: 'modules/creditsense/templates/sidebar.html'
                        }
                    }
                })

                .state('app.score.dashboard', {
                    url: '',
                    views: {
                        'body@app': {
                            templateUrl: 'modules/creditsense/templates/score/dashboard.html',
                            controller: 'ScoreDashboardController'
                        }
                    }
                });
        });
})();
