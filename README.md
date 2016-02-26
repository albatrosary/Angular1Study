# Angular1 Study - Step11: RxJS

see:[Reactive-Extensions](https://github.com/Reactive-Extensions/RxJS)

## Install essential libraries

```bash
npm install rx-angular --save
```

## add files

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
Controller.prototype.$onInit = function() {
  console.log('onInit()');

  ctrl.rx.createObservableFunction(ctrl, 'submit')
    .map(term => term)
    .flatMapLatest(searchWikipedia)
    .subscribe(results => {ctrl.$rootScope.$apply(ctrl.results = results);});
}

function searchWikipedia (term) {
  var deferred = ctrl.$http({
    url: "http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK",
    method: "jsonp",
    params: {
      action: "opensearch",
      search: term,
      format: "json"
    }
  });

  return ctrl.rx.Observable
    .fromPromise(deferred)
    .map(response => response.data[1]);
}
```

