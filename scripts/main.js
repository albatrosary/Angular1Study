(function () {
  'use strict';

  angular
    .module('TodoApp', [
      'ngRoute',
      'TodoApp.components.home',
      'TodoApp.components.todo'
    ])
    .config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController as home'
      })
      .when('/todo', {
        templateUrl: 'components/todo/todo.html',
        controller: 'TodoController as todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();