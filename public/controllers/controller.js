var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function () {
	    $http.get('/eRestraunt').success(function(response){
	    	console.log('i got the data i requested');
	    	$scope.contactList = response;
	    	$scope.contact = "";
	    });
	};

	refresh();

   	$scope.addContact = function() {
    	console.log($scope.contact);
    	$http.post('/eRestraunt', $scope.contact).success(function(response){
    		console.log(response);
    		refresh();
    	});
    };

    $scope.remove = function(id) {
    	console.log(id);
    	$http.delete('/eRestraunt/' + id).success(function(response){
    		refresh();
    	});
    };

    $scope.edit = function(id) {
    	console.log(id);
    	$http.get('/eRestraunt/' +id).success(function(response) {
    		$scope.contact = response;
    	});
    };

    $scope.update = function() {
    	console.log($scope.contact._id);
    	$http.put('/eRestraunt/' + $scope.contact._id, $scope.contact).success(function(response){
    		refresh();
    	});
    }

    $scope.deselect = function() {
    	$scope.contact = '';
    }

}]);
