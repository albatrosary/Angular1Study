(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo')
    .component('todoBody', {
      controller: Controller,
      templateUrl: 'components/todo/todo.body.html',
      bindings:  {
        list: '='
      }
    });

  Controller.$inject = [];
  
  var ctrl;

  function Controller() {
    console.log('Todo body Controller Constructor');
    ctrl = this;
  }
  
  Controller.prototype.removeTodo = function (index) {
    ctrl.list.splice(index, 1);
  };
})();
