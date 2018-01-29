"use strict";

angular.module("TodoApp").controller("ItemDetailCtrl", function($scope, ItemListFctry, $routeParams) {

  console.log($routeParams);
  let todoItems = ItemListFctry.getTodoItems();
  $scope.selectedItem = 

});