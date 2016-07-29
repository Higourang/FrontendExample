(function() {
	'use strict';
	angular.module('git.repository').service('repositoryService',
			[ '$http', '$q', repositoryService ]);
	function repositoryService($http, $q) {
		var url_endpoint = "https://api.github.com";
		return {
			search : function(name) {
				return $http.get(url_endpoint + "/search/repositories", {
					params : {
						"q" : name
					}
				}).then(function success(response) {
					return response;
				}, function error(response) {
					return $q.reject(response);
				});
			},

			getRepository : function(params) {
				return $http.get(url_endpoint + "").then(
						function success(response) {
							return response;
						}, function error(response) {
							return $q.reject(response);
						});
			}
		};
	}
})();
