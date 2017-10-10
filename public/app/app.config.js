'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
            	template: "<customers-module></customers-module>" 
            })
            .when("/customers",{
                 template:  "Customers"
            })
            .otherwise({
                template: "Other111"
            });
    });