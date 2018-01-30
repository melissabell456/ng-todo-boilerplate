"use strict";

angular.module("TodoApp").controller("ItemEditCtrl", function ($scope, ItemListFctry, $routeParams, $location) {
 
  $scope.title = "Edit";
  let currentTodo = $routeParams.id;

  ItemListFctry.getTodoDetails(currentTodo)
  .then( (item) => {
    $scope.todoItem = item;
  });

  $scope.saveItem = () => {
    ItemListFctry.updateTodo(currentTodo, $scope.todoItem)
    .then( (data) => {
      $location.url(`/items/details/${currentTodo}`);
    });
  };

});