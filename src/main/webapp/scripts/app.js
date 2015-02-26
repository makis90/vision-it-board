'use strict';

/* App Module */


var appMap = angular.module('appMap', ['ngRoute', 'pascalprecht.translate', 'ngResource', 'ngCacheBuster', 'ui.bootstrap','ngAnimate']);

appMap.config(function ($routeProvider, $translateProvider, httpRequestInterceptorCacheBusterProvider) {

            //Cache everything except rest api requests
            httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*rest.*/],true);

            $routeProvider
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                })
                .when('/error', {
                    templateUrl: 'views/error.html'
                })
                .when('/logout', {
                    templateUrl: 'views/main.html',
                    controller: 'LogoutController'
                })
                .when('/#/', {
                    templateUrl: 'views/poleChart.html',
                    controller: 'PoleController'
                })
                .otherwise({
                    templateUrl: 'views/poleChart.html',
                    controller: 'PoleController'
                });
        });


