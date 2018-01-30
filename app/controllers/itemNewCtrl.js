"use strict";

angular.module("TodoApp").controller("ItemNewCtrl", function($scope, $location, ItemListFctry) {

  $scope.title = "New";

  $scope.todoItem = {
    task: "",
    isCompleted: false,
    dueDate: "",
    assignedTo: "",
    location: "",
    urgency: "",
    dependencies: ""
  };

  // sends result of new object collected with angularJS to firebase and sends user back to list of todos
  $scope.saveItem = () => {
    ItemListFctry.addNewItem($scope.todoItem)
    .then( (data) => {
      $location.url("/items/list");
    });
  };


});