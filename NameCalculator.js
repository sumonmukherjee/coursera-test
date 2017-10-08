(function () {
  'use strict'
  angular.module('NameCalculator', [])
  .controller("NameCalculatorController", function ($scope) {
    $scope.name = "";
    $scope.total = 0;
    $scope.displayTotal = function(){
      var totalNameValue = calculateNumericValue($scope.name);
      $scope.total = totalNameValue;
    };

    function calculateNumericValue(string) {
      var total = 0
      for(var i = 0; i < string.length; i++) {
        total += string.charCodeAt(i)
      }
      return total
    }
  })
})();
