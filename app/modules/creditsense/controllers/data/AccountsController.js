(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('AccountsController', Controller);

    function Controller($scope, PostService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();

        $scope.account = {
            title: 'Royal Bank of Scotland',
            payments: {
                "2016-04-01": {
                    date: "2016-04-01",
                    amount: 45.00,
                    balance: 2345.00,
                    missed: false
                }
            }
        };

    }
})();
