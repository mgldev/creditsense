(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .service('EngineVariableService', Service);

    function Service() {

        var functions = {
            "total_number_of_accounts": function(accounts) {

                return accounts.length;
            }
        }
    }
})();
