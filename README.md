# Angular1 Study - Step3: Install libraries

## Install essential other libraries

### Use npm

```bash
npm install angular-ui-router --save 
```

### Rewrite HTML

before
```html
<script src="node_modules/angular-route/angular-route.min.js"></script>
```

after
```html
<script src="node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
```
### ngRoute Directive

before
```html
<div class="container">
  <div ng-view></div>
</div>
``

after
```html
<div class="container">
  <div ui-view></div>
</div>
``

### ngHref Directive

before
```html
<li><a ng-href="#/home">Home</a></li>
<li><a ng-href="#/todo">Todo</a></li>
```

after
```html
<a ui-sref="home">Home</a>
<a ui-sref="tofo">Todo</a>
```

### Routing Config

Change a $routeProvider to $stateProvider

before
```javascript
$routeProvider
  .when('/', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeController as home'
  })
```

after
```javascript
$stateProvider
  .state('home', {
    url: "/",
    templateUrl: "components/home/home.html"
    controller: 'HomeController',
    controllerAs: 'home'
  })
```