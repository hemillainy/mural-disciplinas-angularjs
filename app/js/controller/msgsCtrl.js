angular.module("mural").controller("disciplinasCtrl", function ($scope, disciplinasAPI) {

    let disc = [];

    disciplinasAPI.getDisciplinas()
        .then(disciplinas => {
            // disc = disciplinas.data;
            disc = disciplinas.data.sort((a, b) => {
                return a.period - b.period
            });
            $scope.disciplinas = disc;
        })
    
    $scope.setListagem = function (periodo) {
        if (periodo > 0) {
            $scope.disciplinas = disc.filter(a => a.period === periodo)
        } else {
            $scope.disciplinas = disc;
        }
    }
});