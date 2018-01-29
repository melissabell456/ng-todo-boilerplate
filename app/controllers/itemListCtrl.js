"use strict";

angular.module("TodoApp").controller("ItemListCtrl", function($scope, ItemListFctry, $rootScope) {

  $rootScope.searchTerm = "";

  $scope.items = ItemListFctry.getTodoItems();
  
});