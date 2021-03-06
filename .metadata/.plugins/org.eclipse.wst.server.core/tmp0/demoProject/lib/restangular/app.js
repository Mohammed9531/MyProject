/**
 * 
 */
angular.module('project', ['restangular', 'ui.router']).
    
    app.config(function($stateProvider, $urlRouterProvider) {

    	$urlRouterProvider.otherwise("/list");

    	$stateProvider
    	.state('list', {
    		url: "/list",
    		controller:ListCtrl, 
    		templateUrl: "list.html"
    	}).state('test', {
    		url: "'/edit/:projectId'",
    		controller:EditCtrl, 
    		templateUrl: "detail.html",
    		resolve: {
    	          project: function(Restangular, $route){
    	            return Restangular.one('projects', $route.current.params.projectId).get();
    	          }
    	        }
    	}).state('new', {
    		url: "'/new'",
    		controller:CreateCtrl, 
    		templateUrl: "detail.html"
    	});
      
      RestangularProvider.setBaseUrl('file.json');
      RestangularProvider.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' })
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });
      
      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      })
  });


function ListCtrl($scope, Restangular) {
   $scope.projects = Restangular.all("projects").getList().$object;
}


function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('projects').post($scope.project).then(function(project) {
      $location.path('/list');
    });
  }
}

function EditCtrl($scope, $location, Restangular, project) {
  var original = project;
  $scope.project = Restangular.copy(original);
  

  $scope.isClean = function() {
    return angular.equals(original, $scope.project);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      $location.path('/list');
    });
  };

  $scope.save = function() {
    $scope.project.put().then(function() {
      $location.path('/');
    });
  };
}