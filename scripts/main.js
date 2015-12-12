(function () {
  'use strict';

  angular
    .module('TodoApp', [
      'ui.router',
      'TodoApp.components.home',
      'TodoApp.components.todo'
    ])
    .config(AppConfig);

  AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "components/home/home.html",
        controller: 'HomeController as home'
      })
      .state('todo', {
        url: "/todo",
        templateUrl: "components/todo/todo.html",
        controller: 'TodoController as todo'
      });
    $urlRouterProvider
      .otherwise('/');
  }
})();