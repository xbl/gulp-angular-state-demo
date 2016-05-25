(function () {
	'use strict';
	var app = angular.module('ModuleConfig', ['oc.lazyLoad']);

	app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
		var modules = [];
		/**
		 * inject:service
		 modules[modules.length] = {name: '<%= module.name %>', files: ['<%= module.path %>']};
		 */
		 modules[modules.length] = {name: 'Main.service', files: ['/module/main/Main.service.js']};
		 
		 modules[modules.length] = {name: 'Second.service', files: ['/module/main/Second.service.js']};
		 
		 modules[modules.length] = {name: 'Prize.service', files: ['/module/prize/Prize.service.js']};
		 
		 modules[modules.length] = {name: 'Loading.directive', files: ['/directive/loading/Loading.directive.js']};
		 /** endInject */
		
		// 模块定义别名
		$ocLazyLoadProvider.config({
			modules: modules,
			debug: false,
		});
	}]);
})();