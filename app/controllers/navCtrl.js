"use strict";

angular.module("TodoApp").controller("NavCtrl", function($scope) {
 
  $scope.navItems = [
    // TODO: Hide/Show login/out
    {
      name: "Logout",
      url: "#!/logout"
    },
    {
      name: "Log In",
      url: "#!/login"
    },
    {
      name: "All Items",
      url: "#!/items/list"
    },
    {
      name: "New Item",
      url: "#!/items/new"
    }
  ];

});