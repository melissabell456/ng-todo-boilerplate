"use strict";

angular.module("TodoApp").factory("ItemListFctry", function($http, $q, FBUrl) {
  
  function getTodoItems() {
    // return $q( (resolve, reject) {
    //   $http
    //   .get("FBUrl")
    // })
  }
  

  function addNewItem(newItem) {
    newItem.id = "";
    $http.post(`${FBUrl}/todos.json`,
      JSON.stringify(newItem)
  )
  .then( (data) => {
    console.log("new item posted", data);
  })
  .catch( (error) => {
    console.log(error);
  });
  }
 
  return { getTodoItems, addNewItem };
});
