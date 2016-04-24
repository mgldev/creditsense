(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .service('CreditHistoryService', Service);

    function Service() {

        var accounts = [
            {
                title: 'Royal Bank of Scotland',
                type: 'current',
                payments: {}
            }
        ];

        this.getAccounts = getAccounts;
        this.addNewAccount = addNewAccount;

        function getAccounts() {

            return accounts;
        }

        function addNewAccount(account) {

            accounts.push(account);
        }
    }
})();
