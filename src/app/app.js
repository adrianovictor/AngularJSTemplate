(function (){
	'use strict';

	angular
		.module('site', ['ui.router'])
		.config(function ($urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/');
			$locationProvider.html5Mode({
				enabled: false,
				requireBase: false
			});
		})
		.run(['$rootScope', function ($rootScope) {
			$rootScope.editModeEnabled = true;
		}])
		.controller('mainCtrl', function ($scope) {
			console.log('Aplicação executado');
		});

})();