(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('EngineBoundariesController', Controller);

    function Controller($scope, localStorageService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();

        function resetBoundary() {

            $scope.newBoundary = {
                from: '',
                to: '',
                label: '',
                description: '',
                color: ''
            };
        }

        resetBoundary();


        $scope.scoreConfig = localStorageService.get('scoreConfig');

        $scope.$watch('scoreConfig', function(modifiedScoreConfig) {
            localStorageService.set('scoreConfig', modifiedScoreConfig);
        }, true);

        $scope.AddBoundary = AddBoundary;

        function AddBoundary(boundary) {
            $scope.scoreConfig.boundaries.push(boundary);
            resetBoundary();
        }
    }
})();
