# Angular1 Study - Step8: Component Router

It would be good to use the Component Router is if you use the Angular1.5.
Component Router of Angular is ngComponetRouter.

## Install essential other libraries

### Use npm

```bash
npm install ngComponentRouter --save 
```

### Rewrite HTML

before
```html
<script src="node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
```

after

```html
<script src="node_modules/ngcomponentrouter/angular_1_router.js"></script>
```
### ngRoute Directive

before
```html
<div class="container">
  <div ui-view></div>
</div>
```

after
```html
<div class="container">
  <div ng-outlet></div>
</div>
```

### ngHref Directive

before
```html
<a ui-sref="home">Home</a>
<a ui-sref="todo">Todo</a>
```

after
```html
<a ng-link="['Home']">Home</a>
<a ng-link="['Todo']">Todo</a>
```

### Routing Config

Change a $routeProvider to $stateProvider

before
```javascript
$stateProvider
  .state('home', {
    url: "/",
    templateUrl: "components/home/home.html"
    controller: 'HomeController',
    controllerAs: 'home'
  })
```

after
```javascript
    $router.config([
      {
        path: '/home',
        name:'Home',
        component: 'home',
        useAsDefault: true
      }
    ]);
```

And Change

before
```javascript
  .config(AppConfig);
```

after
```javascript
  .controller('AppController', AppController);
```

before
```html
<body ng-app="TodoApp">
```

after
```html
<body ng-app="TodoApp" ng-controller="AppController as app">
```

## Change Component base Module form Controller base Module

before
```javascript
  angular
    .module('TodoApp.components.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    console.log('HomeController Constructor');
  }
```

after
```javascript
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
```
