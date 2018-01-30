"use strict";

angular.module("TodoApp").factory("ItemAddFctry", function($http, $q, FBUrl) {

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
  return { addNewItem };
});