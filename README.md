# Angular1 Study - Step2: ディレクティブ（ng-xxxを使ってみる）

### ng-model

ng-model については詳しい説明なしに利用しましたし、AngularJS を使うために ng-app も既に触りました。ここまでで実は2つもディレクティブについて学んだということになります。余談ですが AngularJS 既に用意しているディレクティブのことをビルトインディレクティブと呼びます。ディレクティブは開発者自身が作ることができ開発したディレクティブはカスタムディレクティブと呼んでいます。  
話を元に戻して ng-model ですが inputタグや selectタグ、 textareaタグなどの要素にたいして「モデル」と呼ばれるデータを保持しておく領域を管理すると共にバインディングを提供します。このことは先ほどのサンプルで体験済みです！  

### ng-bind

バインディングで {{}} を利用しましたが、アプリケーションを作っているとバインディングに若干の時間が必要になる場合があります。そのときにかっこ悪いかもしれませんが {{}} がチラッと見えることがあります。それを回避させるために ng-bind を利用します。先ほどのサンプルの {{}} を置き換えてみます。

```html
<input type="text" ng-model="hoge">
<span ng-bind="hoge"></span>
<span ng-bind="::hoge"></span>
```
### ng-show と ng-if

もう少しプログラムチックな動きをさせるために ng-show と ng-if を利用してみます。テキストボックスに入力した値が 1 のときにメッセージを出力するというロジックを記述してみます。  
```html
<input type="text" ng-model="hoge">
<div ng-show="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
```  

これは  ng-if でも書くことができます。  

```html
<input type="text" ng-model="hoge">
<div ng-if="hoge==='1'"><span ng-bind="hoge"></span>が入力されました</div>
``` 
### ng-invalid と ng-dirty

テキストボックスに対してバリデーションチェックを行います。簡単に必須チェックを行いましょう。先ほどのサンプルはテキストボックスに required を入れることで必須項目となります。
```html
<input type="text" ng-model="hoge" required >
```
画面上、警告も何も表示されないので何が起きているのか確認できませんが、カスケードスタイルシートを定義するとよく理解できます。headタグの中に次の定義をしてください：  
```html
<style>
  input.ng-invalid {
    border-color: #ff0000;
  }
</style>
```
何も入力されていないときにはテキストボックスの縁が赤くなっていることが確認できます。ただ、これだと入力前から赤いので UI としてはイマイチといった感じです。ここで ng-dirty を利用します。カスケードスタイルシートを次のように変更してください：  
```html
<style>
  input.ng-invalid.ng-dirty {
    border-color: #ff0000;
  }
</style>
```
こうすることで入力前は警告なしで、入力後、空欄にした場合は赤くなることが確認できます。

### $invalid と $dirty を利用する（ちょっと寄り道）

入力されてなかった場合、赤くなりましたがメッセージも表示します。メッセージを表示するためには formタグ を用意し「名前」をつける必要があります。formタグ名前を「demo」としテキストボックスの名前を「username」とします。警告メッセージは「必須入力です」にしましょう。するとbodyタグの中身は次のようになります。
```html
<form name="demo">
  <input type="text" name="username" ng-model="hoge" required>
  <p ng-show="demo.username.$invalid && demo.username.$dirty">必須入力です</p>
</form>
```
### ng-minlength と ng-maxlength

更に、入力された文字の長さを定義することができます。usernameの長さを4文字以上、8文字未満として定義します。
```html
<form name="demo">
  <input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required>
  <p ng-show="demo.username.$invalid && demo.username.$dirty">必須入力です</p>
</form>
```
機能に合わせてメッセージも変更します。$errorを使うことでメッセージの幅が広がります。
```html
<form name="demo">
  <input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required>
  <p ng-show="demo.username.$invalid && demo.username.$dirty">入力された値が不正です</p>
  <p ng-show="demo.username.$error.minlength">4文字以下です</p>
  <p ng-show="demo.username.$error.maxlength">8文字以上入力されています</p>
</form>
```
入力系の画面を作成する場合は、こういった AngularJS の機能を使うことでJavaScriptを書かなくても多くの機能を実装することができます。ビルトインディレクティブの威力といったところです。次に一覧を作成し、さらにディレクティブの機能について触れていきます。

### ng-init と ng-repeat

ng-init は AngularJS で何か処理を行わせるための前処理を行う部分です。ここに一覧表示させるデータを定義し ng-repeat で定義したデータを表示します。  
先ほどのform終了タグの下に追加します。
```html
<div ng-init="
  demoData = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]
"></div>
<ul>
  <li ng-repeat="data in demoData">{{data.name}} - {{data.age}}</li>
</ul>
```
一覧表示されました。ここからバインディングの威力が問われます。filter という機能を実装します。  
```
ng-repeat="data in demoData"
```
の部分に手を加えます。
```
ng-repeat="data in demoData | filter: search"
```
次に ng-model として search と定義したテキストボックスを用意います。先ほどのサンプルは  
```html
<input type="text" ng-model="search">
<div ng-init="
  demoData = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]
"></div>
<ul>
  <li ng-repeat="data in demoData | filter: search">{{data.name}} - {{data.age}}</li>
</ul>
```
簡易検索ができました。たったこれだけのことで今まででは高機能だったものを実装することができました。

### filter をもう少し

filter というキーワードが出てきましたのでもう少しフィルターについて見てみます。uppercase というフィルターを利用するとはじめに実装した表示を大文字にすることができます：
```html
<input type="text" ng-model="hoge">
{{hoge | uppercase}}
```
同じように ng-show で使ったサンプルでは
```html
<input type="text" ng-model="hoge">
<div ng-show="(hoge | uppercase)==='A'"><span ng-bind="hoge"></span>が入力されました</div>
```

### ng-options

配列が定義されてますので selectタグを使ってみます。selectタグで利用されるのが ng-options です

```html
<div ng-init="
  demoData = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]
"></div>
<select ng-model="user" ng-options="data.name for data in demoData">
  <option value="">何か入力してください<option>
</select>
<div ng-show="user.name">選択されたのは:{{user.name}}さん{{user.age}}さい</div>
```

### ng-value

次に radioボタンを作ってみます。その時に利用するのが ng-value です。

```html
<div ng-init="name.selected=''"></div>
<div ng-init="
  demoData = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]
"></div>

<ul>
  <li ng-repeat="data in demoData">
    <input type="radio" name="hoge" ng-model="name.selected" ng-value="data.name">{{data.name}}
  </li>
</ul>
<div>選択されたのは:{{name.selected}}</div>
```
inputタグに対してもAngularJSはいろいろなディレクティブを用意しています。

### ng-copy と ng-paste 、ng-cut

少し面白いディレクティブに ng-copy、ng-paste、ng-cutといったディレクティブがあります。
```html
<input ng-paste="paste=true" ng-init="paste=false" placeholder='paste here'>pasted: {{paste}}<br>
<input ng-copy="copied=true" ng-init="copied=false; copyvalue='copy me'" ng-model="copyvalue">copied: {{copied}}<br>
<input ng-cut="cut=true" ng-init="cut=false; cutvalue='cut me'" ng-model="cutvalue">cut: {{cut}}
```
こうしたキー操作（ng-keydown、ng-keypress、ng-keyupなど）やマウス操作（ng-mousedown、ng-mousemove、ng-mouseoverなど）様々なディレクティブが用意されています。


### ng-include

今までの流れとは異なりますがここで便利機能 ng-include を使っていましょう。これを使うことでいろいろなページに共通のHTMLファイルを埋め込むことができます。例えばサイトのタイトルやメニューなどでこの機能を利用することが可能です。  
はじめに header.html というファイルを index.html と同じディレクトリに作成してください。  
```
プロジェクトディレクトリ  
|-index.html  
|-header.html  
```
header.html の中身は  
```html
<h1>AngularJS勉強会</h1>
```
としましょう。これを ng-include で取り込みます。bodyタグの下に
```html
<div ng-include="'header.html'"></div>
```
と記載してください。うまくタイトルが表示されます。
