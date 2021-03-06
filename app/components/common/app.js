(function(angular) {

    'use strict';

    // Declare the main module
    angular.module('dd', [
        'ngAnimate',
        'openweathermap',
        'hammer'
    ]);

    // Run block to set global unit for temperature - C/F
    angular
        .module('dd')
        .run([
            '$rootScope',
            function($rootScope) {
                $rootScope.unit = 'C';
            }
        ])

}(angular));