angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: true
        });

        $breadcrumbProvider.setOptions({
            prefixStateName: 'app.main',
            includeAbstract: true
        });

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'views/common/layouts/full.html',
                controller: function($scope) {
                    $scope.subtitle = 'Subtitle goes here';
                },
                ncyBreadcrumb: {
                    label: 'Root',
                    skip: false
                }
            })
            .state('app.main', {
                url: '/dashboard',
                templateUrl: 'views/main.html',
                controller: function($scope) {
                    $scope.subtitle = 'bar2';
                },
                ncyBreadcrumb: {
                    label: '{{ "HOME" | translate }}',
                }
            })
    }]);
