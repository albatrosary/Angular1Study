(function () {
  'use strict';

  angular
    .module('TodoApp.components.home', [])
    .component('home', {
      controller: Controller,
      templateUrl: 'components/home/home.html'
    });

  Controller.$inject = [];

  function Controller() {
    console.log('Home Controller Constructor');
  }
})();