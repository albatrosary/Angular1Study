(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = [];

  var vm;

  function TodoController() {
    vm = this;
    vm.todoList = [];
  }

  TodoController.prototype.addTodo = function () {
    vm.todoList.push(vm.item);
    vm.item = '';
  };

  TodoController.prototype.removeTodo = function (index) {
    vm.todoList.splice(index, 1);
  };
})();
