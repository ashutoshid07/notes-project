'use strict';

/**
 * @ngdoc overview
 * @name notesProjectApp
 * @description
 * # notesProjectApp
 *
 * Main module of the application.
 */
angular
  .module('notesProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/controllers/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
