
//Nao funciona com a versao atual do angular!
// function personController($scope) {
// 	$scope.firstName = "John",
// 	$scope.lastName = "Doe"
// }


var app = angular.module("myApp", []).controller("personController", function($scope){
	$scope.firstName = "John",
	$scope.lastName = "Doe"
});		