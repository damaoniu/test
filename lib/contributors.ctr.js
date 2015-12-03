(function(){
    angular.module('app')
        .controller('ContriCtrl',conCtrl);
    conCtrl.$inject=['$scope','repoService','$stateParams'];
    function conCtrl($scope,repoService,$stateParams){
        var vm  =$scope;
        vm.repo = $stateParams.repo
        repoService.contributors($stateParams.owner,$stateParams.repo).then(
          function(response){
              vm.contributors = response.data;
          }
        );
    }
})();