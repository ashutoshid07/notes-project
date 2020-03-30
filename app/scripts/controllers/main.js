'use strict';

/**
 * @ngdoc function
 * @name notesProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesProjectApp
 */
angular.module('notesProjectApp')
  .controller('MainCtrl', function () {
    var $scope = this;
    let currentDate = new Date;
    let currentMonth = '';
    switch(currentDate.getMonth()) {
      case 0 :
        currentMonth = 'January';
        break;
      case 1 :
        currentMonth = 'February';
        break;
      case 2 :
        currentMonth = 'March';
        break;
      case 3 :
        currentMonth = 'April';
        break;
      case 4 :
        currentMonth = 'May';
        break;
      case 5 :
        currentMonth = 'June';
        break;
      case 6 :
        currentMonth = 'July';
        break;
      case 7 :
        currentMonth = 'August';
        break;
      case 8 :
        currentMonth = 'September';
        break;
      case 9 :
        currentMonth = 'October';
        break;
      case 10 :
        currentMonth = 'November';
        break;
      case 11 :
        currentMonth = 'December';
        break;
    }
    $scope.displayDate = currentMonth + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
});
