# Angular1 Study - Step11: RxJS

## Install essential libraries

```bash
npm install rx-angular --save
```

## add files

TodoApp is made from two parts.
It is head and body.

```bash
components/rx/rx.html
components/rx/rx.js
```

## HTML and JavaScript

And coding each referring to the TodoApp.

todo.detail.html defines the contents of the iterator.

(components/rx/rx.html)
```html
<form ng-submit="$ctrl.submit($ctrl.search)">
  <h2>Reactive Angular - Wikipedia Example</h2>
  <input type="text" ng-model="$ctrl.search">
  <button>Search</button>
</form>

<ul>
  <li ng-repeat="result in $ctrl.results">
    {{ result }}
  </li>
</ul>
```
The data you want to receive the data, is defined as onDelete the Delete event.

(components/rx/rx.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp.components.rx')
    .component('rx', {
      controller: Controller,
      templateUrl: 'components/rx/rx.html'
    });
  
  var ctrl;

  function Controller() {
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
```

