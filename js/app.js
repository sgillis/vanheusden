'use strict';

angular.module('app', ['$strap.directives', 'google-maps']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'home.html', controller: HomeCtrl}).
            when('/contact', {templateUrl: 'contact.html', controller: ContactCtrl}).
            otherwise({redirectTo: '/'});
    }], ['$locationProvider', function($locationProvider){
        // derp
    }]);
