angular.module('app')
  .directive('homeWatchDir', function() {

    return {
      restrict: 'E',
      templateUrl: './app/directives/homeWatch/home-watch.html'
    }
  });
  //restrict with A,E, or AE
