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

  function Controller($http, rx) {
    console.log('Todo detail Controller Constructor');
    ctrl = this;

    function searchWikipedia (term) {
      var deferred = $http({
        url: "http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK",
        method: "jsonp",
        params: {
            action: "opensearch",
            search: term,
            format: "json"
        }
      });

      return rx.Observable
        .fromPromise(deferred)
        .map(function(response){ return response.data[1]; });
    }

    this.search = '';
    this.results = [];

    /*
        The following code deals with:
        Creates a "submit" function which is an observable sequence instead of just a function.
    */
    rx.createObservableFunction(this, 'submit')
      .map(function (term) { return term; })
      .flatMapLatest(searchWikipedia)
      .subscribe(function(results) {
          this.results = results;
      }.bind(this));
    }
})();