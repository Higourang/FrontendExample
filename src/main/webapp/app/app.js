(function() {
	'use strict';
	angular.module('application', [
	// angular modules
	'ngResource',
	// custom modules
	'git.repository',
	// third party modules
	'ui.router' ]);

	// modules definition
	angular.module('git.repository', []);

	// Angular app initialization
	angular.module('application').run([ '$log', '$state', runConfig ]);

	/**
	 * This function runs once. App initialization should be here.
	 */
	function runConfig($log, $state) {
		$log.info("Initializing application...");
		$state.go('main');
	}

	// configure our routes
	angular.module('application').config(
			[ '$stateProvider', '$urlRouterProvider', routeConfig ]);

	function routeConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider.state('main', {
			url : '/'
		}).state('gitrepository', {
			url : '/gitrepository',
			templateUrl : 'app/repository/repositoryList.html',
			controller : 'RepositoryListCtrl'
		});
	}
})();