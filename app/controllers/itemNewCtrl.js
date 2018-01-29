"use strict";

angular.module("TodoApp").controller("ItemNewCtrl", function($scope, $location, ItemListFctry) {

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
    ItemListFctry.addNewItem($scope.newTask);
    $location.url("/items/list");
    // console.log("new task to add", $scope.newTask);
  };

});