(function () {
	'use strict';
	var app = angular.module('RouterConfig', ['ui.router', 'oc.lazyLoad']);	

	app.config(['$stateProvider', function ($stateProvider) {
		
		/** inject:controller
		// <%= state.description %>
		$stateProvider
			.state('<%= state.name %>', {
				url: '<%= state.url %>',
				templateUrl: '<%= state.template %>',
				controller: '<%= state.ctrlName %>',
				resolve: {
					load: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(['<%= state.loadFileArr.join("','") %>']);
					}]
				}
			});
		 */
		// 一级页面主controller
		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: '/module/main/index.html',
				controller: 'MainCtrl',
				resolve: {
					load: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(['/module/main/Main.controller.js','/module/main/index.css']);
					}]
				}
			});
		 
		// Login controller
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: '/module/main/login.html',
				controller: 'LoginCtrl',
				resolve: {
					load: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(['/module/main/Main.controller.js','/module/main/login.css']);
					}]
				}
			});
		 
		// 奖品controller
		$stateProvider
			.state('prize', {
				url: '/prize',
				templateUrl: '/module/prize/prize.html',
				controller: 'PrizeCtrl',
				resolve: {
					load: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(['/module/prize/Prize.controller.js','/module/prize/prize.css']);
					}]
				}
			});
		 /** endInject */
	}]);
})();
