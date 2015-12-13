var app = angular.module('angualrRepeat', ['angular-loading-bar']);

app.controller('listdata',function($scope, $http){
	$scope.details = [];
	$http.get("mockJson/mock.json").success(function(data){
		$scope.details = data;
	});
});