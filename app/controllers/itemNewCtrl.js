"use strict";

angular.module("TodoApp").controller("ItemNewCtrl", function($scope, $location, ItemAddFctry) {

  $scope.newTask = {
    task: "",
    isCompleted: false,
    dueDate: "",
    assignedTo: "",
    location: "",
    urgency: "",
    dependencies: ""
  };

  $scope.addNewItem = () => {
    ItemAddFctry.addNewItem($scope.newTask);
    $location.url("/items/list");
    // console.log("new task to add", $scope.newTask);
  };

});