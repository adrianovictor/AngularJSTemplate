(function (){
	'use strict';

	angular
		.module('site', ['ui.router', 'site.home', 'site.about'])
		.config(function ($urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');
			// $locationProvider.html5Mode({
			// 	enabled: true,
			// 	requireBase: false
			// });
		})
		.run(['$rootScope', function ($rootScope) {
			$rootScope.editModeEnabled = true;
		}])
		.controller('mainCtrl', function ($scope) {
			console.log('Aplicação executado');
		});

})();