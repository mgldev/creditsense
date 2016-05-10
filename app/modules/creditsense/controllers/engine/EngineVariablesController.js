(function () {
    'use strict';

    angular
        .module('creditSenseModule')
        .controller('EngineVariablesController', Controller);

    function Controller($scope, localStorageService) {

        function load() {
            setTimeout(function() {
                $('#side-menu').metisMenu();
            }, 3);
        }

        load();
    }
})();
