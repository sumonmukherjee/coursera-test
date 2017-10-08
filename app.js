(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('myFirstController', function($scope){
    $scope.name = "Sumon Mukherjee";
    $scope.sayHello = function () {
      return "Hello World!"
    }
  });
})();
