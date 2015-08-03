/*var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider.when('/', 
    {
      templateUrl: 'home.html', 
      controller: 'HomeCtrl'
    });

  $routeProvider.when('/edit/:id', {
    templateUrl: 'edit.html', 
    controller: 'EditCtrl'
  });
        
  $routeProvider.otherwise({ redirectTo: '/'});
});

app.controller('HomeCtrl', function ($scope, $location) {
    
    $scope.editBook = function () {
      $location.path('/edit/' + $scope.id);
    };
    
  });
  
app.controller('EditCtrl', function EditCtrl($scope, $routeParams, bookService, $location) {

    $scope.loading = true;

    bookService.getBookById($routeParams.id)
      .then(function (result) {
        $scope.book = result;
        $scope.loading = false;
      });
    
    $scope.goBack = function () {
      $location.path('/');
    };
  });
  
app.factory('bookService', function ($q, $timeout) {
  
  var books =  
    [
      { id: 1, name: 'Book 1', author: 'Author 1' },
      { id: 2, name: 'Book 2', author: 'Author 2' },
      { id: 3, name: 'Book 3', author: 'Author 3' }
    ];
  
  return {
    getBookById: function(id) {
      
      // Using $q and $timeout to simulate http request that takes 2s
      var deferred  = $q.defer();
      
      $timeout(function () {
        var bookToEdit = books.filter(function (book) {
          return book.id == id;
        })[0];
        deferred.resolve(bookToEdit);
      }, 2000);
      
      return deferred.promise;
      
      // Replace above with for example:
      // return $http({ stuff })
      //          .success( stuff )
      //          .error( stuff );
      //
      //
    }
  };
});*/