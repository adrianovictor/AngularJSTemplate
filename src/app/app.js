(function (){
	'use strict';

	angular
		.module('site')
		.config(function ($urlRouterProvider, $locationProvider) {
			//$urlRouterProvider.otherwise('/');
			// $locationProvider.html5Mode({
			// 	enabled: true,
			// 	requireBase: false
			// });
		})
		.run(['$rootScope', '$state', function ($rootScope, $state) {
			$rootScope.editModeEnabled = true;

			$rootScope.$on('$stateChangeStart', (event, toState) => {
				console.log('mudança de state');
			});
		}])
		.controller('mainCtrl', function ($scope) {
			console.log('Aplicação executado');
		});

	/**
	 * Preload data before app startup
	 * @returns {promise} - promise instance
	 */
	function preLoad() {
        const injector = angular.injector(['ng']);
        const $q = injector.get('$q');

		return $q.all();
	}

	/**
	 * Startup app
	 */
	function startApp() {
        angular.element(document).ready(() => {
            angular.bootstrap(document, ['site']);
        });

	}

	preLoad().then(startApp());
})();