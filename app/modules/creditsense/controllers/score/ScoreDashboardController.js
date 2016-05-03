(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('ScoreDashboardController', Controller);

    function Controller($scope, $interval, CreditHistoryService, localStorageService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();

        $scope.score = 400;

        $interval(function() {
            $scope.score = $scope.score + 10;
        }, 500);

        $scope.scoreConfig = localStorageService.get('scoreConfig');
        $scope.accounts = CreditHistoryService.getAccounts();
    }
})();
