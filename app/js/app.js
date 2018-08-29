var app = angular.module("mural", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/nova-disciplina", {
        templateUrl:'app/views/envio-nova-disciplina.html'
    });
})