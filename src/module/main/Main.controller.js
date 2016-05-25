(function () {
	'use strict';
	var app = angular.module('Main.controller', [['Second.service']]);
	/**
	 * 一级页面主controller
	 * @At('main', '/main')
	 * @Template("./index.html")
	 * @Style('./index.css')
	 */
	app.controller('MainCtrl', ['$scope', '$rootScope', 'sayHiService', function ($scope, $rootScope, sayHiService) {
		console.log('一级页面主controller');
		sayHiService();
	}]);

	/**
	 * Login controller
	 * @At('login', '/login')
	 * @Template("./login.html")
	 * @Style("./login.css");
	 */
	app.controller('LoginCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) { }]);
})();