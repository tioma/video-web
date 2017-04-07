'use strict';

let superApp = angular.module('wiveo', [
	'ui.router',
	'ui.bootstrap',
	'ngSanitize'
]);

superApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url: '/',
		templateUrl: 'main/main.view.html',
		controller: 'mainCtrl as vmMain'
	}).state('watch', {
		url: '/watch/:videoId',
		templateUrl: 'watch/watch.view.html',
		controller: 'watchCtrl as vmWatch'
	}).state('login', {
		url: '/login',
		templateUrl: 'login/login.html',
		controller: 'loginCtrl'
	}).state('register', {
		url: '/register',
		templateUrl: 'register/register.html',
		controller: 'registerCtrl'
	})

}]);

superApp.constant('API_ENDPOINT', 'http://localhost:3000');
