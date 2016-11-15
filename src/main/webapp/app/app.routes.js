(function(){
	'use strict';
		// configure our routes
	angular.module('app').config(
			[ '$stateProvider', '$urlRouterProvider', routeConfig ]);

	function routeConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider.state('app', {
			url : '/'
		}).state('repository', {
			url : '/repository',
			templateUrl : 'app/repository/repositoryList.html',
			controller : 'RepositoryListCtrl'
		});
	}
})();