function RightPanelController($scope, $element, $attrs) {
    var ctrl = this;
  
    // This would be loaded by $http etc.
    this.$onInit = function() {
        console.log(ctrl.content);
    };
}
angular.module('notesProjectApp').component('rightPanel', {
    templateUrl: 'components/right-panel/right-panel.html',
    controller: RightPanelController,
    transclude: true,
    bindings: {
        content: '='
    },
    require: {
        parentComponent : '^containerComponent'
    }
});
