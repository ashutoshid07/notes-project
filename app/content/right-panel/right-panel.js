function RightPanelController($scope, $element, $attrs) {
    var ctrl = this;
  
    // This would be loaded by $http etc.
    ctrl.header = '';
    ctrl.content = ''; 
}
angular.module('notesProjectApp').component('rightPanel', {
    templateUrl: 'content/right-panel/right-panel.html',
    controller: RightPanelController,
    bindings: {}
});
