(function () {
    'use strict';

    angular
        .module('baseModule')
        .controller('BaseController', Controller);

    function Controller($rootScope, toastr, localStorageService) {

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

        $rootScope.generateUid = generateUid;

        function generateUid() {

            function _p8(s) {
                var p = (Math.random().toString(16)+"000000000").substr(2,8);
                return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
            }

            return _p8() + _p8(true) + _p8(true) + _p8();
        }

        var scoreConfig = localStorageService.get('scoreConfig');

        if (!scoreConfig) {

            // initial sample score configuration
            scoreConfig = {
                min: 400,
                max: 999,
                boundaries: [
                    {
                        from: 400,
                        to: 720,
                        label: 'poor',
                        description: 'Your credit score indicates a high risk',
                        color: '#d20803'
                    },
                    {
                        from: 721,
                        to: 860,
                        label: 'fair',
                        description: 'Your credit score indicates a fair risk',
                        color: '#ebb002'
                    },
                    {
                        from: 860,
                        to: 999,
                        label: 'good',
                        description: 'Your credit score indicates a low risk',
                        color: '#9bd402'
                    }
                ]
            };

            localStorageService.set('scoreConfig', scoreConfig);
        }
    }
})();
