(function () {
    'use strict';

    angular
        .module('applicationComponents')
        .directive('basicTable', function() {
            return {
                scope: {
                    data: '=',
                    editRecordCallback: '&'
                },
                templateUrl: 'components/basicTable/basicTable.tpl.html',
                controller: function($scope) {
                    $scope.selectedRowIndex = null;
                    $scope.selectedRowClone = null;

                    $scope.setSelectedRow = setSelectedRow;

                    $scope.$on('basicFormModal.submit', function(e, modifiedRecord) {

                        // Submit the modified record
                        $scope.editRecordCallback({
                            record: modifiedRecord
                        })
                            .then(function(response) {
                                $scope.data[$scope.selectedRowIndex] = response;
                                setSelectedRow(null);
                            });
                    });

                    $scope.$on('basicFormModal.close', function() {
                        $scope.selectedRowIndex = null;
                        $scope.selectedRowClone = null;
                    });

                    function setSelectedRow(row, $index) {
                        if (row) {
                            row = angular.copy(row);
                            $scope.selectedRowIndex = $index;
                        }

                        $scope.selectedRowClone = row;
                    }
                }
            };
        });
})();
