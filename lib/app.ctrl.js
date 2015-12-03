(function(){
    angular.module('app')
        .controller('AppCtrl',appCtrl);
        appCtrl.$inject=['$scope','repoService'];
        function appCtrl($scope,repoService){
            var vm = $scope;
            getRepos();
            vm.sortBy=function(sort){
                getRepos(sort)
            }


            function getRepos(sort){
                repoService.byFullName(sort).then(function(response){
                    vm.repos = response.data;
                });
            }
        }

})();