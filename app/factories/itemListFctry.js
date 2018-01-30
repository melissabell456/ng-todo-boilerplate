"use strict";

angular.module("TodoApp").factory("ItemListFctry", function($http, $q, FBUrl) {
  
  function getTodoItems() {
    return $q( (resolve, reject) => {
      $http
      .get(`${FBUrl}/todos.json`)
      .then ( (todoData) => {
        resolve(todoData.data);
      })
      .catch( (error) => {
        console.log(error);
      });
    });
  }


  return { getTodoItems };
});
