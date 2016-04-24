(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('ScoreDashboardController', Controller);

    function Controller($scope, CreditHistoryService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();

        $scope.score = 450;

        $scope.accounts = CreditHistoryService.getAccounts();

        $scope.labelFormatFunction = function(value, ratio) {

            return value;
        };
    }
})();
