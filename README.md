# Angular1 Study - Step10: Components of the todoDetail

## add files

TodoApp is made from two parts.
It is head and body.

```bash
components/todo/todo.detail.html
components/todo/todo.detail.js
```

## HTML and JavaScript

And coding each referring to the TodoApp.

todo.detail.html defines the contents of the iterator.

(components/todo/todo.detail.html)
```html
<p class="input-group">
  <input type="text" ng-model="$ctrl.data" class="form-control">
  <span class="input-group-btn">
    <button class="btn btn-danger" ng-click="$ctrl.removeTodo($index)" aria-label="Remove">X</button>
  </span>
</p>
```
The data you want to receive the data, is defined as onDelete the Delete event.

(components/todo/todo.detail.js)
```javascript
(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo')
    .component('todoDetail', {
      controller: Controller,
      templateUrl: 'components/todo/todo.detail.html',
      bindings:  {
        data: '<',
        onDelete: '&'
      }
    });
  
  var ctrl;

  function Controller() {
    console.log('Todo detail Controller Constructor');
    ctrl = this;
  }
})();
```

## Change todo.body

Using the interface defined in detail and item iterator parameters.

(components/todo/todo.body.html)
```html
<todo-detail ng-repeat="item in $ctrl.list track by $index"
data="item"
on-delete="$ctrl.removeTodo($index)"></todo-detail>
```
