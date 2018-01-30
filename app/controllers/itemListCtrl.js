"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, ItemListFctry, FilterFctry, $route) {

  
  $scope.searchTerm = FilterFctry;

  ItemListFctry.getTodoItems()
  .then( (todoData) => {
    $scope.items = [];
    for (let todo in todoData) {
      todoData[todo].fbID = todo;
      $scope.items.push(todoData[todo]);
    }
  });
  

  $scope.deleteTodo = (fbID) => {
    ItemListFctry.deleteTodoItem(fbID)
    .then( () => {
      $route.reload();
    });
  };

});