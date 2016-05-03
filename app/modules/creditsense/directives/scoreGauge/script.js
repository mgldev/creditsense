(function() {
    'use strict';

    angular.module('creditSenseModule')

        .directive('scoreGauge', function() {

            return {
                restrict: 'E',
                scope: {
                    score: '=',
                    config: '='
                },
                replace: true,
                templateUrl: 'modules/creditsense/directives/scoreGauge/template.html',
                link: ScoreGauge
            };

            function ScoreGauge(scope, element, attrs) {

                scope.gaugeId = 'gauge-7272';

                var gauge = null;

                setTimeout(function() {

                    var gaugeConfig = {
                        id: scope.gaugeId,
                        value: scope.score,
                        min: scope.config.min,
                        max: scope.config.max,
                        label: "points",
                        width:415,
                        height:315,
                        customSectors: []
                    };

                    angular.forEach(scope.config.boundaries, function(boundary) {
                        gaugeConfig.customSectors.push({
                            color: boundary.color,
                            lo: boundary.from,
                            hi: boundary.to
                        });
                    });

                    gauge = new JustGage(gaugeConfig);

                    scope.$watch('score', function(newScore) {
                        gauge.refresh(newScore);
                    });

                }, 500);
            }
        });
})();