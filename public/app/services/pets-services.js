'use strict';

angular.module('petServices', [])
    .factory('petServices', function ($http, $q, $routeParams) {

        var serv  = {};

        serv.getPetsOwner = (id) => {
            var q = $q.defer();
            $http.get('api/customers/' + id + '/pets')
                .success(function (response) {
                    q.resolve(response);
                    
                }).error(function (error) {
                q.reject(':( ' + error);
                
            });
            return q.promise;
        };

        serv.getPetById = (id) => {
            var q = $q.defer();

            $http.get('api/pets/' + id)
                .success(function (response) {
                    q.resolve(response);
                }).error(function (error) {
                q.reject(':( ' + error);
            });
            return q.promise;
        };

        serv.deletePet = (id) => {
            var q = $q.defer();
            $http.delete('api/pets/' + id, {params: {_id: id}})
                .success(function (response) {
                    q.resolve(response);
                }).error(function (error) {
                q.reject(error);
            });
            return q.promise;
        };

        serv.addPet = (obj) => {
            var q = $q.defer();

            $http.post("api/pets", JSON.stringify(obj)).success(function (response) {
                q.resolve(response);
                alert("Mascota añadida");
            }).error(function (error) {
                q.reject(':(' + error);
            });
            return q.promise;
        };

        serv.editPet = (obj) => {
            var q = $q.defer();
            $http.put("api/pets/" + obj._id, JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
                alert("Mascota actualizada");
            }).error(function (err) {
                q.reject(err);
            });
            return q.promise;
        };

        return serv ;
    });
