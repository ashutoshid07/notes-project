angular.module('notesProjectApp').factory('notesService', ['$rootScope', function ($rootScope) {
    return {
        saveNotes: function (notesList) {
            return sessionStorage.notesService = angular.toJson(notesList);
        },

        restoreNotes: function () {
            return angular.fromJson(sessionStorage.notesService) || [];
        }
    }
}]);
