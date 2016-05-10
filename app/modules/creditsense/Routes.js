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
                })

                /**
                 * Engine routes
                 */
                .state('app.engine', {
                    abstract: true,
                    url: '/engine',
                    views: {
                        sidebar: {
                            templateUrl: 'modules/creditsense/templates/sidebar.html'
                        }
                    }
                })

                .state('app.engine.boundaries', {
                    url: '/boundaries',
                    views: {
                        'body@app': {
                            templateUrl: 'modules/creditsense/templates/engine/boundaries.html',
                            controller: 'EngineBoundariesController'
                        }
                    }
                })

                .state('app.engine.variables', {
                    url: '/variables',
                    views: {
                        'body@app': {
                            templateUrl: 'modules/creditsense/templates/engine/variables.html',
                            controller: 'EngineVariablesController'
                        }
                    }
                })
        });
})();
