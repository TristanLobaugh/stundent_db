var studentApp = angular.module("studentApp", []);

studentApp.controller("studentController", function($scope, $http){
	$scope.list = [];

	function getList(){
		var apiUrl = "http://localhost:3050/student_list";
		$http.get(apiUrl).then(function successCallback(response){
			for(var i = 0; i < response.data.length; i++){
				$scope.list.push(response.data[i].name);
			}
			$scope.list.sort();
		}, function errorCallback(response){
		  	$scope.result = "ERROR!!! " + response.status;
			}
		);
	}

	// $scope.reverseList = function(){
	// 		$scope.list.reverse();		
	// }

	$scope.getReversedList = function(){
		var myArray =[]
		var apiUrl = "http://localhost:3050/student_list/reversed";
		$http.get(apiUrl).then(function successCallback(response){
			for(var i = 0; i < response.data.length; i++){
				myArray.push(response.data[i].name);
			}
			myArray.sort();
			$scope.list = myArray.reverse();
		}, function errorCallback(response){
		  	$scope.result = "ERROR!!! " + response.status;
			}
		);
		}

getList();
// END CONTROLLER
});