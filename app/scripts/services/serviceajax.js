'use strict';

/**
 * @ngdoc service
 * @name cineMaxApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineMaxApp.
 */
angular.module('cineMaxApp')
  .factory('serviceAjax', function serviceAjax($http) {

    return{

      popular: function(page){

        return $http.get("http://localhost:3000/popular?page=" + page);

      }

    }

  });
