(function() {
    'use strict';
    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl:'views/home.html'
            })
            .state('contributors',{
               url:'/contributors/:owner/:repo',
               templateUrl:'views/contributors.html',
               controller:'ContriCtrl'
        })
            ;
    }
})();