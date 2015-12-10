(function () {
  'use strict';

  angular
    .module('TodoApp.components.home', [
      'TodoApp.service.lists'
    ])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['ListsService'];

  var vm;

  function HomeController(ListsService) {
    console.log('HomeController Constructor');
    vm = this;
    ListsService.query().$promise
      .then(function (list) {
        vm.list = list;
      })
      .catch(function (e) {
        console.log(e);
      });
  }
})();
