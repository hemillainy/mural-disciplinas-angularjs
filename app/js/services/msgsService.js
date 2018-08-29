angular.module("mural").factory("disciplinasAPI", function ($http) {
    var _getDisciplinas = function () {
        return $http.get("https://api-sistema-pre-matricula.herokuapp.com/api/curricularComponent");
    };
    return {
        getDisciplinas: _getDisciplinas
    };
})