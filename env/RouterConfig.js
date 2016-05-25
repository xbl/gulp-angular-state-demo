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
		 /** endInject */
	}]);
})();
