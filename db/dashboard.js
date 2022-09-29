angular.module("myapp").controller("dashboardController",function($scope){
    $scope.editname=function(index){
        $scope.cond1=true;
       
        
        $scope.name=$scope.topheroes[index].name;
        $scope.id=$scope.topheroes[index].id;
        
    }
    $scope.totalchange=function(id){
        $scope.cond1=false;
        $scope.topheroes.forEach(function(element,index){
            if(element.id==id){
                $scope.topheroes[index].name=$scope.name;
                $scope.array[index].name=$scope.name;
            }
            
        });
    }
})

