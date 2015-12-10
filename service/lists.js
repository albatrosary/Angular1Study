(function () {
  'use strict';

  angular
    .module('TodoApp.service.lists', [
      'ngResource'
    ])
    .factory('ListsService', ListsService);

  ListsService.$inject = ['$resource'];

  function ListsService($resource) {
    return $resource('/api/lists.json', {
      'query': {}
    });
  }
})();
