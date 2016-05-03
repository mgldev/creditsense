'use strict';

angular.module('applicationComponents', []);

/**
 * This is where the collection of application modules are defined as dependencies
 */
angular.module('applicationModules', [
    'baseModule',
    'creditSenseModule'/* starter:module:module */
]);

/**
 * @ngdoc overview
 * @name applicationModuleName
 * @description
 * # applicationModuleName
 *
 * Main module of the application.
 */
angular
    .module('applicationModuleName', [

        // 3rd Party Dependencies
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'toastr',
        'angular-loading-bar',
        'angularMoment',
        'gridshore.c3js.chart',
        'LocalStorageModule',
        // Custom Dependencies
        'applicationComponents',
        'applicationModules'
    ])

    /**
     * Define the API base URL here
     *
     * @todo: Write this value during a build process
     */
    .constant(
        'APIBaseUrl',
        'http://localhost:3000/'
    )

    /**
     * The URL to redirect to if the accessed URL doesn't match any routes
     *
     * @todo: Retrieve the URL from a route name instead of hard-coding the value hers
     */
    .constant(
        'DEFAULT_URL',
        '/data/accounts'
    )

    /**
     * Bootstrap Datepicker configuration
     */
    .config(function(uibDatepickerConfig) {
        angular.extend(uibDatepickerConfig, {
            showWeeks: false,
            formatMonth: 'MM'
        });
    })

    /**
     * Local storage initialisation
     */
    .config(function (localStorageServiceProvider) {

        localStorageServiceProvider
            .setPrefix('creditsense')
            .setStorageType('localStorage')
            .setNotify(true, true)
    })

    /**
     * If no route is matched when loading an app state, default to the provided URL
     */
    .config(function ($urlRouterProvider, DEFAULT_URL) {
        $urlRouterProvider.otherwise(DEFAULT_URL);
    })

    /**
     * Angular Toastr configuration
     */
    .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
            closeButton: true,
            positionClass: 'toast-top-right'
        });
    });
