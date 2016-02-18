(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo')
    .component('todoHead', {
      controller: Controller,
      templateUrl: 'components/todo/todo.head.html',
      bindings:  {
        list: '='
      }
    });

  Controller.$inject = [];

  var ctrl;

  function Controller() {
    console.log('Todo head Controller Constructor');
    ctrl = this;
  }

  Controller.prototype.addTodo = function () {
    ctrl.list.push(ctrl.item);
    ctrl.item = '';
  };
})();
