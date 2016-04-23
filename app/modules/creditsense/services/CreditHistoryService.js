(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .service('CreditHistoryService', Service);

    function Service() {

        var accounts = [
            {
                title: 'Royal Bank of Scotland',
                payments: {}
            }
        ];

        this.getAccounts = getAccounts;

        function getAccounts() {

            return accounts;
        }
    }
})();
