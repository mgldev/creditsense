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

        $scope.score = 870;

        $scope.scoreConfig = {
            min: 400,
            max: 999,
            brackets: [
                {
                    from: 400,
                    to: 720,
                    label: 'poor',
                    description: 'Your credit score indicates a high risk',
                    color: '#d20803'
                },
                {
                    from: 721,
                    to: 860,
                    label: 'fair',
                    description: 'Your credit score indicates a fair risk',
                    color: '#ebb002'
                },
                {
                    from: 860,
                    to: 999,
                    label: 'good',
                    description: 'Your credit score indicates a low risk',
                    color: '#9bd402'
                }
            ]
        };

        $scope.accounts = CreditHistoryService.getAccounts();
    }
})();
