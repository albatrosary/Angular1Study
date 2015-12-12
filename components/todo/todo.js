(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = [];

  function TodoController() {
    console.log('TodoController Constructor');
  }
})();