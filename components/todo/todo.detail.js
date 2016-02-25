(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo')
    .component('todoDetail', {
      controller: Controller,
      templateUrl: 'components/todo/todo.detail.html',
      bindings:  {
        data: '<',
        onDelete: '&'
      }
    });
  
  var ctrl;

  function Controller() {
    console.log('Todo detail Controller Constructor');
    ctrl = this;
  }
})();
