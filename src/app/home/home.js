(function () {
    'use strict';

    angular
        .module('site.home', [])
        .config(function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                views: {
                    "": {
                        templateUrl: 'src/app/home/home.tpl.html',
                        controller: 'homeCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
        })
        .controller('homeCtrl', HomeCtrl);

    /* @NgInject*/
    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

    }
})();