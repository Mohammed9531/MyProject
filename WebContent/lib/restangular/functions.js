app = angular.module("formDemo", []);

function AppKeysCtrl($scope, $http, $location) {
    var tmpDate = new Date();
    
          $scope.newField = {};
          $scope.editing = false;
    
     $scope.appkeys = [
         { "appkey" : "0123456789", "name" : "My new app key", "created" : tmpDate },
         { "appkey" : "abcdefghij", "name" : "Someone elses app key", "created" : tmpDate }
     ];
    
    $scope.editAppKey = function(field) {
        $scope.editing = $scope.appkeys.indexOf(field);
        $scope.newField = angular.copy(field);
    }
    
    $scope.saveField = function(index) {
        if ($scope.editing !== false) {
            $scope.appkeys[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }       
    };
    
    $scope.cancel = function(index) {
        if ($scope.editing !== false) {
            $scope.appkeys[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }       
    };
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ["formDemo"]);
});