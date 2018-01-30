"use strict";

angular.module("TodoApp", ["ngRoute"])
.constant("FBUrl", "https://fir-a5a79.firebaseio.com/")
.config( ($routeProvider) => {
  $routeProvider
  .when('/login', {
    templateUrl: "partials/user-form.html",
    controller: "LoginCtrl"
  })
  .when('/items/list', {
    templateUrl: "partials/item-list.html",
    controller: "ItemListCtrl"
  })
  .when('/items/new', {
    templateUrl: "partials/item-form.html",
    controller: "ItemNewCtrl"
  })
  .when('/items/details/:id/edit', {
    templateUrl: "partials/item-form.html",
    controller: "ItemEditCtrl"
  })
  .when('/items/details/:id', {
    templateUrl: "partials/item-details.html",
    controller: "ItemDetailCtrl"
  })
  .otherwise('/items/list');
});
