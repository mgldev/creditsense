(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('AccountsController', Controller);

    function Controller($scope, CreditHistoryService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();

        $scope.accounts = CreditHistoryService.getAccounts();
        $scope.addNewAccount = addNewAccount;

        function addNewAccount() {

            var account = {
                title: 'Untitled Account',
                payments: {}
            };

            CreditHistoryService.addNewAccount(account);
        }
    }
})();
