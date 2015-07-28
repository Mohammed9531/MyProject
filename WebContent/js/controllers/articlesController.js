/**
 * author : mshoukath
 * date	  : 07/13/2015
 * time	  : 2:45 pm est
 * created with eclipse luna
 */
app.controller('ctrl', function($scope, $http, dataShare) {
	$http.get("json/file.json")
	.success(function(response) {
		$scope.articles = response;
		//alert("Success!");

	})
	.error(function(response, status) {
    $scope.status = status;
    alert("Request failed!"+"\n"+"Error Code: "+status);
    });
	
	$scope.send = function(){
		dataShare.sendData($scope.articles);
	};
	
	/*$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};*/
	
	$scope.remove= function(index){
		var input = confirm("Are you sure you want to delete it?");

		if(input){
			$scope.articles.splice(index, 1);
			alert("Deleted Successfully!");
		}
	}
	
	$scope.event = function(){
		$scope.showHide = {
				show: true,
	            hide: false
		}	
	}	
});