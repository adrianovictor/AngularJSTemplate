(function () {
    'use strict';

    angular
        .module('site.about', [])
        .config(function ($stateProvider) {
            $stateProvider.state('about', {
                url: '/sobre',
                views: {
                    "": {
                        templateUrl: 'src/app/home/about.tpl.html',
                        controller: 'aboutCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
        })
        .controller('aboutCtrl', AboutCtrl);

    /* @NgInject*/
    function AboutCtrl() {
        /* jshint validthis: true */
        var vm = this;

    }
})();