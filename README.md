# Angular1 Study - Step5 Todos

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
