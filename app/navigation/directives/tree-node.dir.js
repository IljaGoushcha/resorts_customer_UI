angular.module('Navigation')
.directive('treeNode', function() {

  'use strict'

  return {
    restrict: 'E',
    templateUrl: '../../../partials/navigation/tree-node.html',
    scope: {
      eventType: "=eventType",
      bindedEventType: "=ngModel"
    },
    link: function(scope, element, attrs) {

      console.log(element.find("span"));

      var testFunction = function() {
        console.log("inside test function");
        scope.bindedEventType.isOpen = true;

      };

      element.find("span").on('click', testFunction); //if multiple spans, use element.find('span')[1]

      scope.expanderImgPath = '';
      if (scope.eventType.isOpen === true) {
        scope.expanderImgPath = 'hi';
      } else if (scope.eventType.isOpen === false) {
        scope.expanderImgPath = 'hello';
      }
      console.log("inside link: " + scope.expanderImgPath);

    }
  };
});
