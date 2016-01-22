# Angular1 Study

Branch
* master: Install essential libraries
* step2: Directive
* step3: Install essential other libraries
* step4: Routing(ngRoute)
* step5: Todos
* step6: Ajax
* step7: Routing(ui-router)
* step8: Routing Sample

## Create a project folder

```bash
mkdir SampleApp && cd $_
```

## Install essential libraries

### Use npm

```bash
npm init -y
npm install angular@1.5.0-rc.0 --save
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
  
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min.js"></script>
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

### Python

```bash
python -m SimpleHTTPServer
```

## Check Module

Add to the body tag of Index.html

```html
{{1+1}}
```

2 is displayed in the browser!
