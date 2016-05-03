(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('ScoreDashboardController', Controller);

    function Controller($scope, CreditHistoryService, localStorageService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();

        $scope.score = 970;
        $scope.scoreConfig = localStorageService.get('scoreConfig');
        $scope.accounts = CreditHistoryService.getAccounts();
    }
})();
