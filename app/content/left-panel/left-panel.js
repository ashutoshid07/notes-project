function LeftPanelController($scope, $element, $attrs) {
    var ctrl = this;
  
    // This would be loaded by $http etc.
    ctrl.list = [
      {
        heading: 'Testing',
        date: new Date(),
        content: 'There is a lot of content on this page but I need not display them all'
      },
      {
        heading: 'Testing',
        date: new Date(),
        content: ''
      }
    ];
}
angular.module('notesProjectApp').component('leftPanel', {
    templateUrl: 'content/left-panel/left-panel.html',
    controller: LeftPanelController,
    bindings: {}
});
