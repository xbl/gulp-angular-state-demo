(function () {
	'use strict';
	var app = angular.module('Main.controller', [['Second.service']]);
	/**
	 * 一级页面主controller
	 * @At('main', '/main')
	 * @Template("./index.html")
	 * @Style('./index.css')
	 * @Custom({role: [{ status: 1, toState: 'second.myLogin' }] })
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
	 * @Custom({ 
	 *  role: [{ status: 1, toState: 'second.myLogin' }],
	 * 	shareData: { 
	 * 		link: '/beerCattleKingRulesMin.html',
	 *		imgUrl: '/images/theme/weChat.jpg',
	 *		title: '第二届我是牛啤王＆牛啤宝贝争霸赛',
	 *		desc: '第二届我是牛啤王＆牛啤宝贝争霸赛开始报名啦！观致5汽车、iPhone7、iWatch、1000元现金，大奖等你来拿！'
	 *	}})
	 */
	app.controller('LoginCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) { 
		
	}]);
})();