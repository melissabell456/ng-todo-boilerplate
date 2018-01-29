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

  function addNewItem(newItem) {
    return $q( (resolve, reject) => {
      $http
      .post(`${FBUrl}/todos.json`, JSON.stringify(newItem))
      .then( (addedItem) => {
        console.log(addedItem);
        resolve(addedItem);
      })
      .catch( (error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  return { getTodoItems, addNewItem };
});
