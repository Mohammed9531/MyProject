/**
 * author : mshoukath
 * date	  : 07/22/2015
 * time	  : 11:45 am est
 * created with eclipse luna
 */
app.controller('shareCtrl', function($scope, dataShare) {

	$scope.articles = '';
	$scope.$on('data_shared',function(){
		var text =  dataShare.getData();    
		$scope.articles = text;
	});
});