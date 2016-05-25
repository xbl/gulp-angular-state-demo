(function (baseUrl) {
	'use strict';
	var app = angular.module('index', ['ui.router', 'oc.lazyLoad', 'RouterConfig', 'ModuleConfig']);
	
	app.config(['$urlRouterProvider', '$sceProvider', '$httpProvider', '$locationProvider', function($urlRouterProvider, $sceProvider, $httpProvider, $locationProvider) {
		// 安全开关
		$sceProvider.enabled(false);
		// 默认跳转url地址
		$urlRouterProvider.otherwise('main');
	}]);

	// 设置全局变量
	app.run(['$rootScope', '$state', '$ocLazyLoad', '$injector', '$location', '$timeout', '$window', function ($rootScope, $state, $ocLazyLoad, $injector, $location, $timeout, $window) {
		$rootScope.BASE_URL = baseUrl;
		$rootScope.$state = $state;

		// // 加载微信config配置
		// $ocLazyLoad.load('WeiXinServiceModule').then(function () {
		// 	var getWX = $injector.get('getWX');
		// 	getWX(weixinShareEvent);
		// });
	}]);
})(function () {
	'use strict';
	// 获取当前script路径
	var scripts = document.getElementsByTagName('script'),
		currentScriptPath = scripts[scripts.length - 1].src;
	return currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/js/'));
}());

// 入口
angular.element(document).ready(function () {
	'use strict';
	angular.bootstrap(document, ['index']);
});
