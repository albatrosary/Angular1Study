(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo', [])
    .component('todo', {
      controller: Controller,
      templateUrl: 'components/todo/todo.html'
    });

  Controller.$inject = [];

  function Controller() {
    console.log('Todo Controller Constructor');
    this.todolist = [];
  }
})();
