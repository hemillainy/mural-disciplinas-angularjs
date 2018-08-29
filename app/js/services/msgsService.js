angular.module("mural").factory("msgsAPI", function ($http) {
    var _getMsgs = function () {
        return $http.get("https://api-sistema-pre-matricula.herokuapp.com/api/curricularComponent");
    };
    return {
        getMsgs: _getMsgs
    };
})