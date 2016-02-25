/* global angular */
(function () {
  'use strict';

  angular
    .module('TodoApp.components.rx', ['rx'])
    .component('rx', {
      controller: Controller,
      templateUrl: 'components/rx/rx.html'
    });

  Controller.$inject = ['$rootScope', '$http', 'rx'];
  
  function Controller($rootScope, $http, rx) {
    console.log('Todo detail Controller Constructor');
    ctrl = this;
    ctrl.$rootScope = $rootScope;
    ctrl.$http = $http;
    ctrl.rx = rx;
    ctrl.search = '';
    ctrl.results = [];
  }
 
  var ctrl;
  
  Controller.prototype.$onInit = function() {
    console.log('onInit()');

    ctrl.rx.createObservableFunction(ctrl, 'submit')
      .map(term => term)
      .flatMapLatest(searchWikipedia)
      .subscribe(results => {ctrl.$rootScope.$apply(ctrl.results = results);});
  }
  
  function searchWikipedia (term) {
    var deferred = ctrl.$http({
      url: "http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK",
      method: "jsonp",
      params: {
        action: "opensearch",
        search: term,
        format: "json"
      }
    });

    return ctrl.rx.Observable
      .fromPromise(deferred)
      .map(response => response.data[1]);
  }
})();