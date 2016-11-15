(function(){
	'use strict';
	// Angular app initialization
	angular.module('app').run([ '$log', '$state', runConfig ]);
	function runConfig($log, $state) {
		$log.info("Initializing  app...");
		$state.go('app');
	}
})();