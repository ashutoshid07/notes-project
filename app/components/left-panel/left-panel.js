function LeftPanelController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.selectedList = {};
    ctrl.listItems;
    let previousElement = -1;
    ctrl.selectNote = function (list, index) {
      ctrl.selectedList = list;
      ctrl.selectedNote({key:ctrl.selectedList});
      console.log(document.getElementById('note'+index));
      if(previousElement >= 0) {
        document.getElementById('note'+previousElement).style.backgroundColor = '#1E1F23';
      }
      document.getElementById('note'+index).style.backgroundColor = '#343539';
      previousElement = index;
    }
    this.$onInit = function() {
      console.log(ctrl.listItems);
    };
}
angular.module('notesProjectApp').component('leftPanel', {
    templateUrl: 'components/left-panel/left-panel.html',
    controller: LeftPanelController,
    bindings: {
      listItems: '<',
      selectedNote : '&'
    },
    transclude: true
});
