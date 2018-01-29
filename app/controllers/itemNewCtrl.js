"use strict";

angular.module("TodoApp").controller("ItemNewCtrl", function($scope) {

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
    console.log("new task to add", $scope.newTask);
  };

});