'use strict';

/**
 * @ngdoc overview
 * @name cineMaxApp
 * @description
 * # cineMaxApp
 *
 * Main module of the application.
 */
angular
  .module('cineMaxApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
