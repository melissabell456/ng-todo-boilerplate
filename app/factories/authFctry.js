"use strict";

angular.module("TodoApp").factory("AuthFactory", function(FBCreds) {

  let createUser = function(userObj) {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
    });
  };

});