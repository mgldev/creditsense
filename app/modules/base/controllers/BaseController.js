(function () {
    'use strict';

    angular
        .module('baseModule')
        .controller('BaseController', Controller);

    function Controller($rootScope, toastr) {

        /**
         * Event listener to trigger a success message.
         *
         * The listener can receive;
         *
         *      - A single string, which will be used as the success message
         *      - An object containing the following properties;
         *          - title:    The title for the popup (optional)
         *          - message:  The main success message
         */
        $rootScope.$on('successMessage', function(event, data) {
            if (angular.isObject(data)) {
                toastr.success(data.message, data.title);
            } else {
                toastr.success(data);
            }
        });

        /**
         * Event listener to trigger a error message.
         *
         * The listener can receive;
         *
         *      - A single string, which will be used as the error message
         *      - An object containing the following properties;
         *          - title:    The title for the popup (optional)
         *          - message:  The main error message
         */
        $rootScope.$on('errorMessage', function(event, data) {

            if (angular.isObject(data)) {
                toastr.error(data.message, data.title);
            } else {
                toastr.error(data);
            }
        });
    }
})();
