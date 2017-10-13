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
            .when('/customers/:id', {
            	template: "<customer-module></customer-module>" 
		    })
		    .when('/customers/add', {
            	template: "<customer-module></customer-module>" 
		    })
            .otherwise({
                template: "Other111"
            });
    });


