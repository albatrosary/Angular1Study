# Angular1 Study - Step9: Component Todos

TodoApp made with step5 rebuilds according to the Angular Component.

## add files

TodoApp is made from two parts.
It is head and body.

```bash
components/todo/todo.html
components/todo/todo.js
components/todo/todo.body.html
components/todo/todo.body.js
components/todo/todo.head.html
components/todo/todo.head.js
```

## HTML and JavaScript

And coding each referring to the TodoApp.


(components/todo/todo.html)
```html
<h2>Todo</h2>
<todo-head></todo-head>
<hr>
<todo-body></todo-body>
```

(components/todo/todo.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo', [])
    .component('todo', {
      controller: Controller,
      templateUrl: 'components/todo/todo.html'
    });

  Controller.$inject = [];

  function Controller() {
    console.log('Todo Controller Constructor');
  }
})();
```

(components/todo/todo.body.html)
```html
<div>
  <p class="input-group" ng-repeat="data in todo.todoList track by $index">
    <input type="text" ng-model="data" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-danger" ng-click="todo.removeTodo($index)" aria-label="Remove">X</button>
    </span>
  </p>
</div>
```

(components/todo/todo.body.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo')
    .component('todoBody', {
      controller: Controller,
      templateUrl: 'components/todo/todo.body.html'
    });

  Controller.$inject = [];

  function Controller() {
    console.log('Todo body Controller Constructor');
  }
})();
```

(components/todo/todo.head.html)
```html
<form role="form" ng-submit="todo.addTodo()">
  <div class="input-group">
    <input type="text" ng-model="todo.item" placeholder="What needs to be done?" class="form-control">
    <span class="input-group-btn">
      <input type="submit" class="btn btn-primary" value="Add" name="add">
    </span>
  </div>
</form>
```

(components/todo/todo.head.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo')
    .component('todoHead', {
      controller: Controller,
      templateUrl: 'components/todo/todo.head.html'
    });

  Controller.$inject = [];

  function Controller() {
    console.log('Todo head Controller Constructor');
  }
})();
```
## Add Mothods

Add the methods required for the Head and Body.
And Implement an event in Head and Body

(components/todo/todo.body.js)
```javascript
  var ctrl;

  function Controller() {
    console.log('Todo body Controller Constructor');
    ctrl = this;
  }
  
  Controller.prototype.removeTodo = function (index) {
    ctrl.list.splice(index, 1);
  };
```

(components/todo/todo.head.js)
```javascript
  var ctrl;

  function Controller() {
    console.log('Todo head Controller Constructor');
    ctrl = this;
  }

  Controller.prototype.addTodo = function () {
    ctrl.list.push(ctrl.item);
    ctrl.item = '';
  };
```

## Data collaboration with the Head and the Body

To define the bindings to the Head and Body

(todo.body.js)
```javascript 
.component('todoBody', {
  controller: Controller,
  templateUrl: 'components/todo/todo.body.html',
  bindings:  {
    list: '='
  }
});
```

(todo.head.js)
```javascript 
.component('todoHead', {
  controller: Controller,
  templateUrl: 'components/todo/todo.head.html',
  bindings:  {
    list: '='
  }
});
```

(todo.html)
```html
<h2>Todo</h2>
<todo-head list="$ctrl.todolist"></todo-head>
<hr>
<todo-body list="$ctrl.todolist"></todo-body>
```

(todo.js)
```javascript
function Controller() {
  console.log('Todo Controller Constructor');
  this.todolist = [];
}
```

## Change HTML

In accordance with the style of the Component to use '$ctrl';

(todo.body.html)
```html
<div>
  <p class="input-group" ng-repeat="data in $ctrl.list track by $index">
    <input type="text" ng-model="data" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-danger" ng-click="$ctrl.removeTodo($index)" aria-label="Remove">X</button>
    </span>
  </p>
</div>
```

(todo.head.html)
```html
<form role="form" ng-submit="$ctrl.addTodo()">
  <div class="input-group">
    <input type="text" ng-model="$ctrl.item" placeholder="What needs to be done?" class="form-control">
    <span class="input-group-btn">
      <input type="submit" class="btn btn-primary" value="Add" name="add">
    </span>
  </div>
</form>
```

(components/todo/todo.html)
```html
<h2>Todo</h2>
<todo-head list="$ctrl.todolist"></todo-head>
<hr>
<todo-body list="$ctrl.todolist"></todo-body>
```
