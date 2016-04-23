(function () {
    'use strict';

    // Module instantiation
    var module = angular.module('creditSenseModule', []);

    // Service configuration
    module
        .factory('PostServiceConfig', function(APIBaseUrl) {
            return {
                resourceUrl: APIBaseUrl + 'posts/:id',
                actions: {
                    get:    {
                        method: 'GET',
                        isArray: true
                    },
                    post:   { method: 'POST' },
                    patch:  { method: 'PATCH' },
                    put:    { method: 'PUT'}
                },
                defaults: {
                    id: '@id' // Use the 'id' key from provided data
                }
            };
        })
        .config(function($provide) {
            $provide.decorator(
                'PostService',
                [
                    '$delegate',
                    '$resource',
                    'PostServiceConfig',
                    ResourceServiceDecorator
                ]
            );
        });

})();
