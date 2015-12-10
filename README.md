# Angular1 Study - Step6: Ajax

## Ajax

### Create Service

(lists.js)
```javascript
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
```
### Create Data

(lists.json)
```json
[
  {
    "name": "Angular",
    "note": "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop."
  },
  {
    "name": "Bootstrap",
    "note": "Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development."
  }
]
```
### Create View

(home.html)
```html
<div class="col-lg-6" ng-repeat="data in home.list">
  <div class="card card-block">
    <h4 class="card-title">{{data.name}}</h4>
    <p class="card-text">{{data.note}}</p>
  </div>
</div>
```

(home.js)
```javascript
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
```
