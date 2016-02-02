[TOC]

[常用的生成器](https://github.com/yeoman/generator-angular)

这是一个用yo自动生成的angularjs项目

+ node版本必须用 v0.12.0 用其他的旧版本或者最新的v5.0.0都不行
+ 生成器最好用npm安装 `npm install -g generator-angular`
+ 之后`yo angular`便会直接生成项目。启动项目l: `grunt serve` 测试项目:`grunt test` 用的是karma
+ npm换源的问题
+ 一些隐藏文件的作用

```
.jshintrc     ---  自动检测js文件格式,报错提示的文件
.gitignore    ---  git status 不会检测的文件,会自动略过里面设置的文件和文件夹
bower.json    ---  bower install
package.json  ---  npm install
Gruntfile.js  ---  grunt serve/build/test 自动化的配置文件
```

+ 每一步保存在控制台都会有打印，若格式错误会有警告,由.jshintrc判断,手动去修改

### angularjs内置指令

+ ng-submit是一个将angularJS表达式绑定到表单的onsubmit事件上
+ ng-click 控制元素被点击时的行为  $index的值是当前元素在数组中的索引值

### 使用bower安装包(github上查看源码)

+ 给列表添加一些排列方式来合理的显示它,利用bower安装angular组件

```
bower list  查看已安装的package
bower search angular-ui-sortable  查询相关的包
//--save可以更新bower.json文件中的依赖,
bower install --save angular-ui-sortable jquery-ui
//ctrl+c 退出后,再次grunt serve会发现index.html底部已经将新增的脚本添加进去了
grunt serve
```

+ angularJS中模块的使用,一般在上github上查看

```
angular-ui-sortable 可以让列表选项拖动
//首先将模块对应的依赖加载到自己的应用中,将ui.sortable放入数组中
angular.module('myApp',['ngCokies','ui.sortable',...])
//路由也再这里配置,和ng-include的区别
//html页面中使用 ui-sortable 作为属性,包含ng-repeat的内容
<div ui-sortable ng-model="todos"><p>..</p></div>
```

+ 本地存储的库 angular-local-storage, 避免每次刷新页面后,数据丢失的问题

[本地存储源码](https://github.com/grevory/angular-local-storage)

```
bower install angular-local-storage --save
angular.module('myApp',['ngCookies','LocalStorageModule'])
还要在app.js中配置todo,避免将其它应用中的重名的变量获取过来
.config(['localStorageServiceProvider',function(localStorageServiceProvider){
	localStorageServiceProvider.setPrefix('ls');
}]);
//最后要在控制器中声明对本地服务的依赖,将localStoreService作为第二个参数添加到回调函数中。
.controller('myCtrl',['$scope','localStorageService',function($scope,localStorageService){...}])
//替换掉原来从todos数组中得到的数据,改为从本地存储中得到,在放入$scope.todos中
```

### 单元测试

+ karma是一个js测试框架,test目录下有一个karma.conf文件,会被放入node模块中以使用Karma。编辑一个Jasmine脚本文件来完成测试.在Gruntfile.js中已经有了用于测试的任务

```
打开文件 test/spec/controller/main.js
npm install grunt-karma --save-dev
npm install engine.io --save-dev
npm install socket.io-client --save-dev
npm install socket.io-parser --save-dev
npm install debug --save-dev
```


### bootstrap相关的类

+ form-group/ form-control/ input-group 分别加在p和input元素上,间隔样式的改变
+ input-group-btn 在input输入框里面添加一个按钮

### 疑难问题

+ ng-model绑定的值为undefined问题

```
作用域的问题,将绑定的值改为 $parent.todo
原因是用了 ng-include后,接着后面用的ng-controller 作用域发生了变化
```