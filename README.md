<<<<<<< HEAD
# Angular1 Study - Step11: RxJS
=======
# Angular1 Study

Branch
* master: Install essential libraries
* Step2: Directive
* Step3: Install essential other libraries
* Step4: Routing(ngRoute)
* Step5: Todos
* Step6: Ajax
* Step7: Routing(ui-router)
* Step8: Component Router
* Step9: Component Todos
* Step10: Components of the todoDetail
* Step11: RxJS

## Create a project folder

```bash
mkdir SampleApp && cd $_
```
>>>>>>> origin

see:[Reactive-Extensions](https://github.com/Reactive-Extensions/RxJS)

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

    rx.createObservableFunction(this, 'submit')
      .map(function (term) { return term; })
      .flatMapLatest(searchWikipedia)
      .subscribe(function(results) {
          this.results = results;
      }.bind(this));
    }
})();
```

