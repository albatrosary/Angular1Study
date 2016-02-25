/* global angular */
(function () {
  'use strict';

  angular
    .module('TodoApp.components.rx', ['rx'])
    .component('rx', {
      controller: Controller,
      templateUrl: 'components/rx/rx.html'
    });

  Controller.$inject = ['$http', 'rx'];
  
  var ctrl;
  
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
      .map(function(response){ return response.data[1]; });
  }
  
  function Controller($http, rx) {
    console.log('Todo detail Controller Constructor');
    
    this.$http = $http;
    this.rx = rx;
    
    ctrl = this;
    
    ctrl.search = '';
    ctrl.results = [];
    
    rx.createObservableFunction(ctrl, 'submit')
      .map(function (term) { return term; })
      .flatMapLatest(searchWikipedia)
      .subscribe(results => {ctrl.results = results;});
  }
 
})();