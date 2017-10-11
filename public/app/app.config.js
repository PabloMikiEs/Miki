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
            .when('/customer/:id', {
            	template: "<customer-module></customer-module>" 
		    })
		     .when('/add', {
            	template: "<add-module></add-module>" 
		    })
            .otherwise({
                template: "Other111"
            });
    });


