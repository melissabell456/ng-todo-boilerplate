"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, ItemListFctry, FilterFctry) {

  $scope.searchTerm = FilterFctry;

  ItemListFctry.getTodoItems()
  .then( (todoData) => {
    $scope.items = [];
    for (let todo in todoData) {
      todoData[todo].fbID = todo;
      $scope.items.push(todoData[todo]);
    }
  });
  
});