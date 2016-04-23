/**
 * Decorator function used to extend all Resource Services in the application
 *
 * @param $delegate         Anything assigned to $delegate is available on the instantiated Service
 * @param $resource         AngularJS's $resource service, which is used for all HTTP requests
 * @param ServiceConfig     An object containing the custom configuration required for the individual Service
 */
function ResourceServiceDecorator($delegate, $resource, ServiceConfig) {

    /**
     * Create an instance of AngularJS's $resource service using the configuration provided
     */
    $delegate.resource = $resource(
        ServiceConfig.resourceUrl,
        ServiceConfig.defaults,
        ServiceConfig.actions
    );

    /**
     * Build up the core methods required by resource services. The methods will only be assigned
     * to $delegate (and therefore the instantiated Service) if they are present in the actions object
     * in the Service configuration
     */

    // GET
    if (angular.isDefined(ServiceConfig.actions.get)) {
        $delegate.get = function(params) {
            return $delegate.resource.get(params).$promise;
        };
    }

    // POST
    if (angular.isDefined(ServiceConfig.actions.post)) {
        $delegate.post = function(record) {
            return $delegate.resource.post(record).$promise;
        };
    }

    // PUT
    if (angular.isDefined(ServiceConfig.actions.put)) {
        $delegate.put = function(record) {
            return $delegate.resource.put(
                {
                    id: record.id
                },
                record
            ).$promise;
        };
    }

    // PATCH
    if (angular.isDefined(ServiceConfig.actions.patch)) {
        $delegate.patch = function(record) {
            return $delegate.resource.patch(record).$promise;
        }
    }

    // DELETE
    if (angular.isDefined(ServiceConfig.actions.delete)) {
        $delegate.delete = function(id) {
            return $delegate.resource.delete({
                id: id
            }).$promise;
        }
    }

    /**
     * This function is a convenience wrapper around POST and PUT, automatically calling the relevant saving
     * method based on the presence of a record ID.
     */
    $delegate.save = function(record) {
        var saveMethod;

        var postIsDefined   = angular.isDefined(ServiceConfig.actions.post),
            putIsDefined    = angular.isDefined(ServiceConfig.actions.put),
            recordHasId     = angular.isDefined(record.id);

        if (recordHasId) {
            if (!putIsDefined) {
                throw new Error('Attempting to save an existing record but PUT is not defined');
            }

            saveMethod = 'put';
        } else {
            if (!postIsDefined) {
                throw new Error('Attempting to save a new record but POST is not defined');
            }

            saveMethod = 'post';
        }

        return $delegate[saveMethod](record);
    };

    // Return the decorated Service
    return $delegate;
}
