"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, ItemListFctry, FilterFctry) {

  $scope.searchTerm = FilterFctry;

  $scope.items = ItemListFctry.getTodoItems();
  
});