//Jasmine suite declaration
describe('application.RepositoryListCtrl', function() {
	var $controller;
	//Inject a mock module before each test
	beforeEach(angular.mock.module('git.repository'));
	
	beforeEach(inject(function(_$controller_, $injector, $q){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	it('Should clear name and repositories', function() {
		var $scope = {};
		var controller = $controller('RepositoryListCtrl', { $scope: $scope });
		$scope.name="angular demo app";
		$scope.clear();
		expect($scope.name).toBe(null);
		expect($scope.repositories).toBe(null);
	});
});
