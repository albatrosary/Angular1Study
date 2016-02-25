(function () {
  'use strict';

  angular
    .module('TodoApp', [
      'ngComponentRouter',
      'TodoApp.components.home',
      'TodoApp.components.todo',
      'TodoApp.components.rx'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$router'];

  function AppController ($router) {
    $router.config([
      {
        path: '/home',
        name:'Home',
        component: 'home',
        useAsDefault: true
      },
      {
        path: '/todo',
        name:'Todo',
        component: 'todo'
      },
      {
        path: '/rx',
        name:'Rx',
        component: 'rx'
      }
    ]);
  }
})();