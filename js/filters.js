(function () {
    'use strict';
    angular
        .module("demoApp")
        .filter("sortByLastName", sortByLastName);

    function sortByLastName() {
        return function (array) {
            function compare(person, people) {
                return person.lastName.localeCompare(people.lastName)
            }
            return array.sort(compare);
        }
    }
})();