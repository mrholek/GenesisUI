// Genesis App configuration
var appName = 'Root';
var breadcrumbPrefix = true;
var breadcrumbPrefixName = 'Root';

// General
var headTitle = 'Root Admin';

//Layout options
var header = {
    fixed: true, // true or false
    color: 'light', // options: light, dark
}

var brand = {
    color: 'dark' // options: light, dark
}

var nav = {
    active: true,
    position: 'sidebar', // options: sidebar, top
    fixed: true, // true or false
    compact: false, // true or false Available only for sidebar-nav
    color: 'dark' // options: light, dark
}

//Default colours
var brandPrimary =  '#20a8d8';
var brandSuccess =  '#4dbd74';
var brandInfo =     '#63c2de';
var brandWarning =  '#f8cb00';
var brandDanger =   '#f86c6b';

angular
    .module('app', [
        'ngAnimate',
        'ui.router',
        'oc.lazyLoad',
        'pascalprecht.translate',
        'ncy-angular-breadcrumb',
        'angular-loading-bar'
    ])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 1;
    }])
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$on('$stateChangeSuccess',function(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }]);
