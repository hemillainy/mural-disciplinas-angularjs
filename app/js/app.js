var app = angular.module("mural", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'app/views/mural.html'
        })
        .when("/nova-disciplina", {
            templateUrl: 'app/views/envio-nova-disciplina.html'
        })

})