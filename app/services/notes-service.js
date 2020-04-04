angular.module('notesProjectApp').factory('notesService', ['$rootScope', function ($rootScope) {
    var service = {

        notesList: [],

        saveNotes: function () {
            sessionStorage.notesService = angular.toJson(service.notesList);
        },

        restoreNotes: function () {
            service.notesList = angular.fromJson(sessionStorage.notesService) || service.notesList;
        }
    }

    $rootScope.$on("restoreNotes", service.saveNotes);
    $rootScope.$on("restoreNotes", service.restoreNotes);

    return service;
}]);
