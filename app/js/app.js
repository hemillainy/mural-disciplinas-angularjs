var app = angular.module("mural", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/enviar-msg", {
        templateUrl:'app/views/envio-msg.html'
    });
})