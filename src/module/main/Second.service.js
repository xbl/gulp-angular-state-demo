(function() {
	"use strict";
	var app = angular.module('Second.service', []);
	// 加载script，返回promise对象
	app.factory('sayHiService', ['$q', function($q) { 
		return function(scriptSrc) {
			console.log('Hello service');
		};
	}]);
})();