# Angular1 Study - Step4: Routing(ngRoute)

## Create Menu

```html
<!-- contents -->
<div ng-include="'components/header/header.html'"></div>

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
and

```html
<link rel="stylesheet" href="styles/main.css">
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

