angular.module('Navigation')
.directive('treeNode', function() {

  return {
    restrict: 'E',
    templateUrl: '../../../partials/navigation/tree-node.html',
    scope: {
      eventType: "=eventType"
    },
    link: function() {

    }
  };
});
