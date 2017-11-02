'use strict';

angular.module('petsServices', [])
    .factory('petsServices', ['$http', '$q', '$routeParams', function ($http, $q, $routeParams) {

        console.log('Servicio Pets');

        var service  = {};

        service.getPetsByOwnerId = (id) => {
            var q = $q.defer();
            $http.get('api/customers/' + id + '/pets')
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        service.getPetById = (id) => {
            var q = $q.defer();

            $http.get('api/pets/' + id)
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(':( ' + err);
            });
            return q.promise;
        };

        service.deletePet = (id) => {
            var q = $q.defer();
            $http.delete('api/pets/' + id, {params: {_id: id}})
                .success(function (res) {
                    q.resolve(res);
                }).error(function (err) {
                q.reject(err);
            });
            return q.promise;
        };

        service.postPet = (obj) => {
            var q = $q.defer();

            $http.post("api/pets", JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(':(' + err);
            });
            return q.promise;
        };

        service.putPet = (obj) => {
            var q = $q.defer();
            $http.put("api/pets/" + obj._id, JSON.stringify(obj)).success(function (res) {
                q.resolve(res);
            }).error(function (err) {
                q.reject(err);
            });
            return q.promise;
        };

        return service ;
    }]);
