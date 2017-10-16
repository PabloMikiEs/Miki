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
		    .when("/pets",{
                template: "<pets-module></pets-module>" 
            })
            .when("/pets/:id",{
                template: "<pet-module></pet-module>" 
            })
            .when("/customers/:customerId/pets/add",{
                template: "<pet-module></pet-module>" 
            })
            .otherwise({
                template: "Other111"
            });
    });


