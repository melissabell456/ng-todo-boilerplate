"use strict";

angular.module("TodoApp").factory("ItemDeleteFctry", function($http, $q, FBUrl) {

  let deleteTodoItem = (fbID) => {
    console.log(fbID);
    return $q( (resolve, reject) => {
      $http
      .delete(`${FBUrl}/todos/${fbID}.json`)
      .then( (deletedData) => {
        console.log(deletedData.data);
        resolve(deletedData);
      })
      .catch( (error) => {
        console.log("nope", error);
        reject(error);
      });
    });
  };

  return { deleteTodoItem };

});