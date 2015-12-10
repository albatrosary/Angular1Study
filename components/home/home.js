(function () {
  'use strict';

  angular
    .module('TodoApp.components.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    console.log('HomeController Constructor');
  }
})();
