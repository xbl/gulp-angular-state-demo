(function () {
	"use strict";
	var app = angular.module('Loading.directive', []);

	app.directive('loading', [function() {
		return {
			restrict: 'E',
            templateUrl: '/directive/loading/index.html',
			replace: true
		};
	}]);
})();