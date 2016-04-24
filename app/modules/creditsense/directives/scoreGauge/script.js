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
                        min: 0,
                        max: 999,
                        title: "Credit Score",
                        label: "points",
                        customSectors: [
                            {
                                color: "#d20803",
                                lo: 0,
                                hi: 600
                            },
                            {
                                color: "#ebb002",
                                lo: 601,
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