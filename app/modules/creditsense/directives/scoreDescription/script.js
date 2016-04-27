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

                scope.$watch('score', function(newScore) {

                    console.log('foo');
                    scope.config.brackets.forEach(function(bracket) {
                        if (newScore >= bracket.from && newScore <= bracket.to) {
                            scope.bracket = bracket;
                            return true;
                        }
                    });
                });
            }
        });
})();