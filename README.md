# Angular1 Study - Next Step

## Install essential other libraries

### Use npm

```bash
npm install jquery bootstrap angular-resource@1.5.0-beta.2 angular-route@1.5.0-beta.2 --save 
```

HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular1 Study</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
<body ng-app="TodoApp">
  <!-- contents -->
  
  <!-- package -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="node_modules/angular/angular.min.js"></script>
  <script src="node_modules/angular-route/angular-route.min.js"></script>
  <script src="node_modules/angular-resource/angular-resource.min.js"></script>
  
  <!-- module -->
  
</body>
</html>
```

or

### Use CDN

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular1 Study</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body ng-app="TodoApp">
  <!-- contents -->
  
  <!-- package -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular-route.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular-resource.min.js"></script>
  
  <!-- module -->
  
</body>
</html>
```

## Create Menu

```html
<!-- contents -->
<div ng-include="'header.html'"></div>

<!-- package -->
```
Notes: Writing a single quote (').

header.html is made using the bootstrap.

(header.html)
```html
<div class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#app-nav">
        <span class="sr-only">Toggle</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="">TodoApp</a>
    </div>
    <div class="collapse navbar-collapse" id="app-nav">
      <ul class="nav navbar-nav">
        <li><a>Home</a></li>
        <li><a>Todo</a></li>
      </ul>
    </div>
  </div>
</div>
```

(main.css)
```css
body {
  padding-top: 70px;
  padding-bottom: 20px;
}
```

## Routing configuration

(header.html)
```html
<li><a ng-href="#/home">Home</a></li>
<li><a ng-href="#/todo">Todo</a></li>
```

Define the area to display the component
(index.html)
```html
<!-- contents -->
<div ng-include="'header.html'"></div>
<div class="container">
  <div ng-view></div>
</div>
```

### Components configuration

```html
<!-- module -->
<script src="scripts/main.js"></script>
<script src="components/home/home.js"></script>
<script src="components/todo/todo.js"></script>
```

(main.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp', [
      'ngRoute',
      'TodoApp.components.home',
      'TodoApp.components.todo'
    ])
    .config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController as home'
      })
      .when('/todo', {
        templateUrl: 'components/todo/todo.html',
        controller: 'TodoController as todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
```

#### home.html

(home.html)
```html
<h1>home</h1>
```

(home.js)
```javascript
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
```

#### todo.html

(todo.html)
```html
<h1>todo</h1>
```

(todo.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = [];

  function TodoController() {
    console.log('TodoController Constructor');
  }
})();
```


## Todos

(todo.html)
```html
<h2>Todo</h2>
<!-- Todos input -->
<form role="form" ng-submit="todo.addTodo()">
  <div class="input-group">
    <input type="text" ng-model="todo.item" placeholder="What needs to be done?" class="form-control">
    <span class="input-group-btn">
      <input type="submit" class="btn btn-primary" value="Add" name="add">
    </span>
  </div>
</form>
<hr>
<!-- Todos list -->
<div>
  <p class="input-group" ng-repeat="data in todo.todoList track by $index">
    <input type="text" ng-model="data" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-danger" ng-click="todo.removeTodo($index)" aria-label="Remove">X</button>
    </span>
  </p>
</div>
```

(todo.js)
```javascript
  var vm;

  function TodoController() {
    vm = this;
    vm.todoList = [];
  }
  
  TodoController.prototype.addTodo = function () {
    vm.todoList.push(vm.item);
    vm.item = '';
  };

  TodoController.prototype.removeTodo = function (index) {
    vm.todoList.splice(index, 1);
  };
```

## Ajax

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