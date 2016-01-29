'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the web1App
 */
angular.module('myApp')
	.controller('MainCtrl', ['$scope','localStorageService',function($scope,localStorageService) {
		//由本地存储里的数据替换这个静态数组
		$scope.todos = ['items1', 'items2', 'items3'];
		// var todosInStore = localStorageService.get('todos');
		// $scope.todos=todosInStore && todosInStore.split('\n') || [];
		// $scope.$watch('todos',function(){
		// 	localStorageService.add('todos',$scope.todos.join('\n'));
		// },true);
		$scope.addTodo = function() {
			$scope.todos.push($scope.todo);
			console.log($scope.todos);
		};
		$scope.removeTodo = function(index){
			$scope.todos.splice(index,1);
			console.log($scope.todos);
		};
	}]);