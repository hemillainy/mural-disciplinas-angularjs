angular.module("mural").controller("navBarCtrl", function ($scope) {
    
    let exibir = true;

    function setExibir(exibir) {
        $scope.exibir = !exibir
    }
});