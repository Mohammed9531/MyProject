/**
 * author : mshoukath
 * date	  : 07/22/2015
 * time	  : 11:45 am est
 * created with eclipse luna
 */

app.factory('dataShare',function($rootScope){
  var service = {};
  service.data = false;
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
  };
  service.getData = function(){
    return this.data;
  };
  return service;
});