var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('inputCtrl', ['$scope', '$http', '$window', '$log', '$location', function($scope, $http, $window, $log, $location) {
    console.log('Hello World from inputCtrl');

    $scope.send=function(){
        $http.post('http://localhost:8080/api/v1/extractJSON',{link:$scope.amaUrl}).success(function(response){
            var responseData=response;
            console.log(response.status);
            if(responseData.status=='200'){
                $http.post('http://localhost:8080/api/v1/commentAuthorParent').success(function(response){
                    if(response.status=='200'){
                        console.log('Till Here');
                        $http.post('http://localhost:8080/api/v1/treeCreation').success(function(response){
                            if(response.status=='200'){
                                console.log('Over Here');
                                $http.post('http://localhost:8080/api/v1/cluster').success(function(response){
                                    console.log('Now here');
                                })
                            }
                        })
                    }
                })
            }
        });
        // console.log('here->'+$scope.amaUrl);
    }
}])
