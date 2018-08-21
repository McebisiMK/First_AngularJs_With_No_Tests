(function () {
    'use strict';
    angular
        .module("demoApp")
        .controller("mainController", mainController);

    function mainController($scope, userService) {
        $scope.people = userService.people();
        $scope.person = {}
        $scope.addUser = function () {
            userService.add($scope.person);
            $scope.person = {};
        }
    }
})();