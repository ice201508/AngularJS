'use strict';

/**
 * @ngdoc overview
 * @name jiuling
 * @description
 * # myApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngCookies',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider',function(localStorageServiceProvider){
		localStorageServiceProvider.setPrefix('ls');
	}]);
