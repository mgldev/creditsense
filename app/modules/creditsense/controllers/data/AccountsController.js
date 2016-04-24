(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('AccountsController', Controller);

    function Controller($scope, uibDateParser,  CreditHistoryService) {

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
                id: $scope.generateUid(),
                title: 'Untitled Account',
                type: 'current',
                dateOpened: moment(),
                dateClosed: null,
                dateDefaulted: null,
                payments: {}
            };

            CreditHistoryService.addNewAccount(account);
        }
    }
})();
