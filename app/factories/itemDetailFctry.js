"use strict";

angular.module("TodoApp").factory("ItemDetailFctry", function ($q, $http, FBUrl) {

  let getTodoDetails = (fbID) => {
    return $q( (resolve, reject) => {
      $http
      .get(`${FBUrl}/todos/${fbID}.json`)
      .then( (todoDetails) => {
        resolve(todoDetails.data);
      })
      .catch( (error) => {
        console.log(error);
        reject(error);
      });
    });
  };

  return { getTodoDetails };
});