(function () {
    'use strict';
    angular
        .module("demoApp")
        .service("userService", userService);

    function userService() {
        var collection = [
            { firstName: 'Thomas', lastName: 'Ochman' },
            { firstName: 'Amber', lastName: 'Wilkie' },
            { firstName: 'Raoul', lastName: 'Diffouo' }
        ];
        return {
            people: function () {
                return collection;
            },
            add: function (person) {
                collection.push(person);
            }
        }
    }
})();