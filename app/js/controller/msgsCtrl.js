angular.module("mural").controller("disciplinasCtrl", function ($scope, disciplinasAPI) {
    disciplinasAPI.getDisciplinas()
        .then(disciplinas => {
            $scope.disciplinas = disciplinas.data;
        })
});