angular.module('app')
  .directive('navDir', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/navbar/navbar.html',
      controller: 'navCtrl'
    }
  });
