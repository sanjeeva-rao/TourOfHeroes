angular.module("myapp").controller("heroesController",function($scope){
    $scope.changename=function(index){
        $scope.cond1=true;
        $scope.name=$scope.array[index].name;
        $scope.id=$scope.array[index].id;

    }
    $scope.totalchange=function(id){
        $scope.cond1=false;
        $scope.array.forEach(function(element,index){
            if(element.id==id){
                
                $scope.array[index].name=$scope.name;
                $scope.topheroes[index].name=$scope.name;
            }
            
        });


    }

})