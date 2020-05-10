function RightPanelController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.blurred = function ($event) {
        ctrl.modifiedContent({updatedContent: ctrl.content});
    }
}
angular.module('notesProjectApp').component('rightPanel', {
    templateUrl: 'components/right-panel/right-panel.html',
    controller: RightPanelController,
    transclude: true,
    bindings: {
        content: '<',
        modifiedContent: '&'
    }
});
