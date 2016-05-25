(function () {
	'use strict';
	var app = angular.module('ModuleConfig', ['oc.lazyLoad']);

	app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
		var modules = [];
		/**
		 * inject:service
		 modules[modules.length] = {name: '<%= module.name %>', files: ['<%= module.path %>']};
		 */
		/** endInject */
		
		// 模块定义别名
		$ocLazyLoadProvider.config({
			modules: modules,
			debug: false,
		});
	}]);
})();