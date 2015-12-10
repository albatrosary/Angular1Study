# Angular1 Study

## Create a project folder

```bash
mkdir SampleApp && cd $_
```

## Install essential libraries

### Use npm

```bash
npm init -y
npm install angular@1.5.0-beta.2 --save
```

HTML

```html
<!DOCTYPE html>
<html lang="en">
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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular1 Study</title>
</head>
<body ng-app>
  
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js"></script>
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

### Python

```bash
python -m SimpleHTTPServer
```

## Chack Module

Add to the body tag of Index.html

```html
{{1+1}}
```

2 is displayed in the browser!
