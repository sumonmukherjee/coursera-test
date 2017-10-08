(function () {
  'use strict'
  angular.module("ExprAndInterpolationExampleApp", [])
  .controller('ExprAndInterpolationExampleController', ExprAndInterpolationExampleController);
  ExprAndInterpolationExampleController.$inject = ["$scope"]
  function ExprAndInterpolationExampleController($scope) {
    $scope.name = "Sumon Mukherjee"
    $scope.sayMessage = function () {
      return "Hello World!"
    };
  }
})();
