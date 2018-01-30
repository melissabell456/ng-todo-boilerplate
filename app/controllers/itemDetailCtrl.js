"use strict";

angular.module("TodoApp").controller("ItemDetailCtrl", function($scope, ItemDetailFctry, $routeParams) {

  let selectedTodoID = $routeParams.id;
  console.log("routeparam", selectedTodoID);
  ItemDetailFctry.getTodoDetails(selectedTodoID)
  .then( (todoDetails) => {
    $scope.selectedItem = todoDetails;
  });

  // finding item in todoItems with the matching id as the current $routeParam to only list that specific item
  // $scope.selectedItem = todoItems.find( (item) => {
  //   return item.id === +$routeParams.id;
  // });


});