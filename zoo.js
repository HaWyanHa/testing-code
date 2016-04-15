(function(ns) {
    'use strict';

    function getAnimals(getCallback) {
        // Pretend this is an Ajax call!!
        setTimeout(function fakeAjax() {
            getCallback([
                { species: 'zebra', name: 'Jim' },
                { species: 'orangutan', name: 'Bill' },
                { species: 'otter', name: 'Hector' },
                { species: 'otter', name: 'Amy' },
                { species: 'bear', name: 'Sofia' },
                { species: 'tiger', name: 'Lucille' },
                { species: 'tiger', name: 'Octavius' }
            ]);
        }, 250);
    }

    ns.listAnimals = function listAnimals(type, listCallback) {
        function foo(animals) {

            animals.forEach(function iterateOnAnimals(animal) {

                if (type && animal.species === type) {
                    $('.animals').append('<li>' + animal.name + '</li>');
                } else {
                    // $('.animals').append('<li>' + animal.name + '</li>');
                    console.log("fixed it");
                }

            });

            listCallback(animals);
        }

        getAnimals(  foo   );
    };

    ns.countAnimalsByType = function countAnimalsByType(callback) {
        getAnimals(function doAnimalCount(animals) {
            var count = {};

            animals.forEach(function countEachAnimal(animal) {
                if (!count[animal.species]) {
                    count[animal.species] = 1;  //changed from 1 to 0
                } else {
                    count[animal.species]++;
                }
            });

            callback(count);
        });
    };


    window.zoo = ns;
})(window.zoo || {});