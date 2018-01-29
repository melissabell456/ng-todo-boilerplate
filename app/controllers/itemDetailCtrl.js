"use strict";

angular.module("TodoApp").controller("ItemDetailCtrl", function($scope, ItemListFctry, $routeParams) {

  let todoItems = ItemListFctry.getTodoItems();

  // finding item in todoItems with the matching id as the current $routeParam to only list that specific item
  $scope.selectedItem = todoItems.find( (item) => {
    return item.id === +$routeParams.id;
  });


});