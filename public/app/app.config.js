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
            	template: "<appointments-calendar-module></appointments-calendar-module>" 
            })
            .when("/appointmentdetail/:id",{
                template: "<appointment-detail-module></appointment-detail-module>" 
            })
            .when("/appointmentdetail/add/:datetime",{
                template: "<appointment-detail-module></appointment-detail-module>" 
            })
            .when("/appointments/:fromdate/:todate",{
                template: "<appointments-calendar-module></appointments-calendar-module>" 
            })
            .when("/appointments/:month",{
                template: "<appointments-calendar-module></appointments-calendar-module>" 
            })
            .when("/appointment/day/:day",{
            	template: "<appointment-module></appointment-module>"
                /*template: "<appointments-day-module></appointments-day-module>"*/
            })
            .when("/appointment",{
                template: "<appointment-module></appointment-module>"
            })
            .otherwise({
                template: "Other page"
            });
    });


