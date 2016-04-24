(function() {
    'use strict';

    angular.module('creditSenseModule')

        .directive('scoreGauge', function() {

            return {
                restrict: 'E',
                scope: {
                    score: '='
                },
                replace: true,
                templateUrl: 'modules/creditsense/directives/scoreGauge/template.html',
                link: ScoreGauge
            };

            function ScoreGauge(scope, element, attrs) {

                scope.gaugeId = 'gauge-7272';

                var gauge = null;

                setTimeout(function() {
                    gauge = new JustGage({
                        id: scope.gaugeId,
                        value: scope.score,
                        min: 400,
                        max: 999,
                        label: "points",
                        customSectors: [
                            {
                                color: "#d20803",
                                lo: 400,
                                hi: 720
                            },
                            {
                                color: "#ebb002",
                                lo: 720,
                                hi: 860
                            },
                            {
                                color: "#9bd402",
                                lo: 861,
                                hi:999
                            }
                        ]
                    });

                    scope.$watch('score', function(newScore) {
                        gauge.refresh(newScore);
                    });

                }, 500);
            }
        });
})();