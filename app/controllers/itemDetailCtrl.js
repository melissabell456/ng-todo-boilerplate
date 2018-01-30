"use strict";

angular.module("TodoApp").controller("ItemDetailCtrl", function($scope, ItemListFctry, $routeParams) {

  $scope.selectedTodoID = $routeParams.id;
  ItemListFctry.getTodoDetails($scope.selectedTodoID)
  .then( (todoDetails) => {
    $scope.selectedItem = todoDetails;
  });

});