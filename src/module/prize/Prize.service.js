(function() {
	"use strict";
	var app = angular.module('Prize.service', []);
	
	app.factory('GetPrizeService', ['$q', function($q) { 
		return function(scriptSrc) {
			console.log('Hello Prize service');
		};
	}]);
})();