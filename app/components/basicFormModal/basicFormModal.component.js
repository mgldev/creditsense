(function() {
    'use strict';

    angular
        .module('applicationComponents')
        .directive('basicFormModal', function() {
            return {
                scope: {
                    record: '='
                },
                controller: Controller
            };
        });

    /**
     * @param $scope
     * @param $uibModal
     * @constructor
     */
    function Controller($scope, $uibModal) {
        $scope.submitRecord = submitRecord;
        $scope.closeModal = closeModal;

        $scope.modalInstance = $uibModal.open({
            templateUrl: 'components/basicFormModal/modalTemplate.tpl.html',
            backdrop: 'static',
            scope: $scope
        });

        $scope.$on('basicFormModal.triggerClose', closeModal);

        function submitRecord(record) {
            $scope.$emit('basicFormModal.submit', record);
        }

        function closeModal() {
            $scope.modalInstance.dismiss();
            $scope.$emit('basicFormModal.close');;
        }
    }

})();
