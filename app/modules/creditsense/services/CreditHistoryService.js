(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .service('CreditHistoryService', Service);

    function Service() {

        var accounts = [
            {
                id: '3939393',
                title: 'Royal Bank of Scotland',
                type: 'current',
                dateOpened: moment('2016-01-05'),
                dateDefaulted: null,
                dateClosed: null,
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
