"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, ItemListFctry) {

  $scope.items = ItemListFctry.getTodoItems();
  
});