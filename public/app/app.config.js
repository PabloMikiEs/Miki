'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "Pet Store Demo (Hello World) <a ng-href='customers'>Sample Module</a>"
            })
            .when("/customers",{
                 template: "<customers-module></customers-module>" 
            })
            .otherwise({
                template: "Other111"
            });
    });