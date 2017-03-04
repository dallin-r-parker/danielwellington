angular.module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        templateUrl: 'views/homeView.html',
        url:'/'
      })
  })
