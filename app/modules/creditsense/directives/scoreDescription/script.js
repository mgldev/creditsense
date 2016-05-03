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

                    scope.config.brackets.forEach(function(bracket) {
                        if (score >= bracket.from && score <= bracket.to) {
                            scope.bracket = bracket;
                            return true;
                        }
                    });
                }
            }
        });
})();