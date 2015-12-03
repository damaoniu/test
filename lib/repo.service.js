(function(){
    angular.module('app')
        .service('repoService',repositoryService);
        repositoryService.$inject=['$http'];
        function repositoryService($http){
            return{
                  byFullName:function(sort){
                    sort = sort||"full_name";
                    var repos = $http.get('https://api.github.com/users/hybris/repos?sort='+sort);
                    return repos;
                  },
                contributors:function(owner,repo){
                    var contributors = $http.get('https://api.github.com/repos/'+owner+'/'+repo+'/contributors');
                    return contributors;
                }
            };
        }
})();