var app = angular.module("home", []);

app.controller("homeCtrl", function($scope, $http)
{
    $scope.selectedIndex = 0;
    $scope.selectedIndex1 = 0;

    $scope.itemClicked = function (indice)
    {
        $scope.selectedIndex = indice;

        $http.get('api/temas/?id=' + indice)
            .success(
                function (data)
                {
                    $scope.temas = [];
                    for (var i = 0; i < data.length; i++)
                    {
                        $scope.temas.push(data[i]);
                    }
                })
            .error(
                function (error) {

                });
    };

    $scope.itemClicked1 = function (indice)
    {
        $scope.selectedIndex1 = indice;

        $http.get('api/subtemas/?id=' + indice)
            .success(
                function (data)
                {
                    $scope.subtemas = [];
                    for (var i = 0; i < data.length; i++)
                    {
                        $scope.subtemas.push(data[i]);
                    }
                })
            .error(
                function (error) {

                });
    };
});
