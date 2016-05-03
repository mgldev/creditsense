(function() {
    'use strict';

    angular.module('creditSenseModule')

        .directive('scoreDescription', function() {

            return {
                restrict: 'E',
                scope: {
                    score: '=',
                    config: '='
                },
                replace: true,
                templateUrl: 'modules/creditsense/directives/scoreDescription/template.html',
                link: ScoreDescription
            };

            function ScoreDescription(scope, element, attrs) {

                scope.bracket = null;

                refreshDescription(scope.score);

                scope.$watch('score', function(score) {
                    refreshDescription(score);
                });

                function refreshDescription(score) {

                    scope.config.boundaries.forEach(function(boundary) {
                        if (score >= boundary.from && score <= boundary.to) {
                            scope.boundary = boundary;
                            return true;
                        }
                    });
                }
            }
        });
})();