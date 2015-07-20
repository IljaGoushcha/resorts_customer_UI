angular.module('Navigation')
.directive('myDirective', function() {

  return {
    restrict: 'E',
    templateUrl: '../../partials/navigation/strings.html',
    scope: {my_number: '=number'},
    link: function() {}
  };
});
