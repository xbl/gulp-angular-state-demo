(function() {
	"use strict";
	var app = angular.module('Main.service', []);
	// 加载script，返回promise对象
	app.factory('sayHiService', ['$q', function($q) { 
		return function(scriptSrc) {
			console.log('Hello service');
		};
	}]);

	// 加载css，返回promise对象
	app.factory('getStyle', ['$q', function($q) { 
		return function(scriptSrc) {
			var linkTag = document.createElement('link');
			linkTag.href = scriptSrc;
			linkTag.rel = 'stylesheet';
			document.head.appendChild(linkTag);
			var deferred = $q.defer();

			// 当标签加载完成
			linkTag.addEventListener('load', function() {
				deferred.resolve();
			}, false);

			return deferred.promise;
		};
	}]);
})();