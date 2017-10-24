'use strict';

angular.module('petStore', [
    'ngResource',
    'ngRoute',
    'customersModule', 
    //'customersService',
    'customerModule',
    'petsModule',
    'petModule',
    'appointmentsCalendarModule',
    'appointmentsDayModule',
    'appointmentDetailModule'
]);