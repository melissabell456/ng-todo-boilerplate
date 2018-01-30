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
        resolve(addedItem);
      })
      .catch( (error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  let deleteTodoItem = (fbID) => {
    return $q( (resolve, reject) => {
      $http
      .delete(`${FBUrl}/todos/${fbID}.json`)
      .then( (deletedData) => {
        resolve(deletedData);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  let updateTodo = (fbID, updatedTodo) => {
    return $q( (resolve, reject) => {
      $http
      .put(`${FBUrl}/todos/${fbID}.json`, 
      JSON.stringify(updatedTodo))
      .then( (data) => {
        resolve(data);
      })
      .catch( (err) => {
        reject(err);
      });
    });
  };

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

  return { getTodoItems, deleteTodoItem, addNewItem, updateTodo, getTodoDetails };
});
