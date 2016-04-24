(function() {
    'use strict';

    angular.module('creditSenseModule')

        .directive('account', function() {

            return {
                restrict: 'E',
                scope: {
                    account: '='
                },
                replace: true,
                templateUrl: 'modules/creditsense/directives/account/template.html',
                link: Account
            };

            function Account(scope, element, attrs) {

                var currentDate = moment();

                scope.viewData = {
                    years: buildPaymentHistoryStructure(),
                    datepickers: {
                        dateOpened: {
                            isOpen: false
                        },
                        dateClosed: {
                            isOpen: false
                        },
                        dateDefaulted: {
                            isOpen: false
                        }
                    }
                };

                scope.toggleDatepickerState = toggleDatepickerState;

                function toggleDatepickerState(field) {
                    scope.viewData.datepickers[field].isOpen = !scope.viewData.datepickers[field].isOpen;
                }

                function buildPaymentHistoryStructure() {

                   var years = [];

                   var date = moment();

                   for (var yearCount = 1; yearCount <= 6; yearCount++) {

                       var year = {
                           title:  date.format("YYYY"),
                           months: [],
                           current: date.format("YYYY") == currentDate.format('YYYY')
                       };

                       date.set('month', 0);
                       date.set('date', 1);

                       for (var monthCount = 1; monthCount <= 12; monthCount++) {

                           var month = {
                               title: date.format('MMM'),
                               date: date.format('YYYY-MM-DD'),
                               current: date.format('YYYY-MM') == currentDate.format('YYYY-MM'),
                               enabled: date <= currentDate
                           };

                           if (angular.isDefined(scope.account.payments[month.date])) {
                               month.payment = scope.account.payments[month.date];
                           }

                           year.months.push(month);

                           if (monthCount < 12) {
                               date.add(1, 'M');
                           }
                       }

                       years.push(year);
                       date.subtract(1, 'y');
                   }

                   return years;
               }
            }
        });
})();