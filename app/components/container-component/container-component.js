function ContainerComponentController($scope, $element, $attrs, notesService, $filter) {
    var ctrl = this;
    let currentDate = new Date;
    let currentMonth = '';
    let selectedList = -1;
    const defaultNote = {
        heading: '',
        date: new Date(),
        body: ''
    };
    ctrl.selectedNote;
    ctrl.list = [];
    ctrl.displayDate = '';
    ctrl.called = function(key) {
        for(const [index, value] of ctrl.list.entries()) {
            if(value == key) {
                selectedList = index;
                ctrl.selectedNote = value;
                ctrl.displayDate = $filter('date')(value.date, "MMM dd, yyyy") + ' at ' + $filter('date')(value.date, "HH:mma");
                console.log(ctrl.selectedNote);
            }
        }
    };

    ctrl.addNote = function() {
        ctrl.list.push(angular.copy(defaultNote));
    };

    ctrl.$onInit = function() {
        notesService.restoreNotes();
        ctrl.list = notesService.notesList;
    };
    ctrl.saveState = function() {
        notesService.notesList = ctrl.list;
        notesService.saveNotes();
    };
    ctrl.removeNote = function() {
        ctrl.list.splice(selectedList,1);
        ctrl.selectedNote = null;
        ctrl.displayDate = "";
        selectedList = -1;
    };
}
angular.module('notesProjectApp').component('containerComponent', {
    templateUrl: 'components/container-component/container-component.html',
    controller: ContainerComponentController,
    bindings: {},
    transclude: true
});
