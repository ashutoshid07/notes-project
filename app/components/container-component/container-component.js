function ContainerComponentController($scope, $element, $attrs, notesService, $filter) {
    var ctrl = this;
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
            if(value === key) {
                selectedList = index;
                ctrl.selectedNote = value;
                ctrl.displayDate = $filter('date')(value.date, "MMM dd, yyyy") + ' at ' + $filter('date')(value.date, "HH:mma");
            }
        }
    };

    ctrl.addNote = function() {
        ctrl.list.push(angular.copy(defaultNote));
    };

    ctrl.$onInit = function() {
        ctrl.list = notesService.restoreNotes();
    };
    ctrl.saveState = function() {
        notesService.saveNotes(ctrl.list);
    };
    ctrl.removeNote = function() {
        ctrl.list.splice(selectedList,1);
        ctrl.selectedNote = null;
        ctrl.displayDate = "";
        selectedList = -1;
    };
    ctrl.updateContent = function(updatedContent) {
        ctrl.selectedNote = updatedContent;
    }
}
angular.module('notesProjectApp').component('containerComponent', {
    templateUrl: 'components/container-component/container-component.html',
    controller: ContainerComponentController,
    bindings: {}
});
