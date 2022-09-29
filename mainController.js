app.controller("mainController",function($rootScope,$location){
    $rootScope.goToPage=function(link){
        console.log("from"+$location.path()+"to"+link)
        $location.path(link);
    }
    $rootScope.array=[
        {name:"a","id":101},
        {name:"b","id":102},
        {name:"c","id":103},
        {name:"d","id":104},
        {name:"e","id":105},
        {name:"f","id":106},
        {name:"g","id":107},
        {name:"h","id":108},
        {name:"i","id":109},
        {name:"j","id":110},

    ]
    $rootScope.topheroes=[
        {name:"a","id":101},
        {name:"b","id":102},
        {name:"c","id":103},
        {name:"d","id":104},

    ]

})