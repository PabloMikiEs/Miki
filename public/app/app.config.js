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
            .when("/appointments",{
                template: "<appointments-module></appointments-module>" 
            })
            .when("/appointments/:id",{
                template: "<appointment-module></appointment-module>" 
            })
            .when("/appointments/:fromdate/:todate",{
                template: "<appointments-module></appointments-module>" 
            })
            .when("/appointments/:month",{
                template: "<appointments-module></appointments-module>" 
            })
            .otherwise({
                template: "Other111"
            });
    });


