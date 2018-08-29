angular.module("mural").controller("msgsCtrl", function ($scope, msgsAPI) {
    msgsAPI.getMsgs()
        .then(disciplinas => {
            console.log(disciplinas.data)
            $scope.disciplinas = disciplinas.data;
        })
});