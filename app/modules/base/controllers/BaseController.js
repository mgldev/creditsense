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
                min:400,
                max:999,
                boundaries:[
                    {
                        from:400,
                        to:720,
                        label:"Poor",
                        description:"Your credit score indicates that most lenders may consider you to be a risk customer.  You may have difficulty obtaining credit and will often be offered higher rates on loans and credit cards.",
                        color:"#d20803"
                    },
                    {
                        from:721,
                        to:874,
                        label:"Fair",
                        description:"Your credit score indicates that most lenders may consider you to be a moderate risk customer.  You may not be accepted for the better rate financial products however you stand a decent chance of being accepted for loans and credit cards at higher rates.",
                        color:"#ebb002"
                    },
                    {
                        from:875,
                        to:949,
                        label:"Good",
                        description:"Your credit score indicates that most lenders may consider you a low risk customer.  You are highly likely to be accepted for most financial products and may be eligible for the best deals available.",
                        color:"#9bd402"
                    },
                    {
                        from:950,
                        to:999,
                        label:"Excellent",
                        description:"This is an excellent score and you should expect the best rates and to be rarely declined finance.",
                        color:"purple"
                    }
                ]
            };

            localStorageService.set('scoreConfig', scoreConfig);
        }
    }
})();
