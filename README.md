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

## Install essential libraries

### Use npm

```bash
npm init -y
npm install angular@1.5.3 --save
```

HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Angular1 Study</title>
</head>
<body ng-app>
  
  <script src="node_modules/angular/angular.js"></script>
</body>
</html>
```

or

### Use CDN

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Angular1 Study</title>
</head>
<body ng-app>
  
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
</body>
</html>
```

## Simple development http server

### node:

```bash
npm install live-server
live-server
```

### node:

```bash
npm install http-server
http-server
```

### Ruby

```bash
ruby -run -e httpd -- -p 8000 
```

or

```bash
ruby -rwebrick -e 'WEBrick::HTTPServer.new(:DocumentRoot => "./", :Port => 8000).start'
```

### Python 2系

```bash
python -m SimpleHTTPServer
```

## Check Module

Add to the body tag of Index.html

```html
{{1+1}}
```

2 is displayed in the browser!
