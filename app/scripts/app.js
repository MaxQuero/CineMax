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
      'ui.bootstrap','ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });