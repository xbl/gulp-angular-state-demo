(function () {
	'use strict';
	var app = angular.module('Second.controller', [['Prize.service', 'Loading.directive']]);
	/**
	 * 奖品controller
	 * @At('prize', '/prize')
	 * @Template("./prize.html")
	 * @Style('./prize.css')
	 */
	app.controller('PrizeCtrl', ['$scope', '$rootScope', 'GetPrizeService', function ($scope, $rootScope, GetPrizeService) {
		console.log('prizeController');
		GetPrizeService();
	}]);
})();