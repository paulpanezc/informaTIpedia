var app = angular.module("home", []);

app.controller("homeCtrl", function($scope, $http)
{
    $scope.contenido = false;
    $scope.selectedIndex = 0;
    $scope.selectedIndex1 = 0;
    $scope.selectedIndex2 = 0;

    $scope.itemClicked = function (indice)
    {
        $scope.selectedIndex = indice;
        $scope.selectedIndex1 = 0;
        $scope.selectedIndex2 = 0;
        $scope.subtemas = [];
        $scope.contenido = false;

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
        $scope.selectedIndex2 = 0;
        $scope.subtemas = [];

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

    $scope.itemClicked2 = function (indice, nombre, imagen)
    {
        $scope.selectedIndex2 = indice;
        $scope.contenido = true;
        $scope.titulo = nombre;
        $scope.ruta_imagen = imagen;
    };
});
