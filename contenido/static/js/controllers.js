var app = angular.module("home", []);

app.controller("homeCtrl", function($scope)
{
    $scope.selectedIndex = 0;

    $scope.itemClicked = function (indice)
    {
        $scope.selectedIndex = indice;
    };
});
