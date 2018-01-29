"use strict";

angular.module("TodoApp", ["ngRoute"])
.constant("FBUrl", "https://fir-a5a79.firebaseio.com/")
.config( ($routeProvider) => {
  $routeProvider
  .when('/items/list', {
    templateUrl: "partials/item-list.html",
    controller: "ItemListCtrl"
  })
  .when('/items/new', {
    templateUrl: "partials/item-new.html",
    controller: "ItemNewCtrl"
  })
  .when('/items/details/:id', {
    templateUrl: "partials/item-details.html",
    controller: "ItemDetailCtrl"
  })
  .otherwise('/items/list');
});
