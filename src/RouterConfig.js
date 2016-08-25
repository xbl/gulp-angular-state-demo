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
						return $ocLazyLoad.load(['<%= state.loadFileArr.join("', '") %>']);
					}]
				},
				<%= state.custom %>				
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
						return $ocLazyLoad.load(['/module/main/Main.controller.js', '/module/main/index.css']);
					}]
				},
				role: [{ status: 1, toState: 'second.myLogin' }]				
			});
		 
		// Login controller
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: '/module/main/login.html',
				controller: 'LoginCtrl',
				resolve: {
					load: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(['/module/main/Main.controller.js', '/module/main/login.css']);
					}]
				},
				role: [{ status: 1, toState: 'second.myLogin' }], shareData: { link: '/beerCattleKingRulesMin.html', imgUrl: '/images/theme/weChat.jpg', title: '第二届我是牛啤王＆牛啤宝贝争霸赛', desc: '第二届我是牛啤王＆牛啤宝贝争霸赛开始报名啦！观致5汽车、iPhone7、iWatch、1000元现金，大奖等你来拿！' }				
			});
		 
		// 奖品controller
		$stateProvider
			.state('prize', {
				url: '/prize',
				templateUrl: '/module/prize/prize.html',
				controller: 'PrizeCtrl',
				resolve: {
					load: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(['/module/prize/Prize.controller.js', '/module/prize/prize.css']);
					}]
				},
								
			});
		 /** endInject */
	}]);
})();
