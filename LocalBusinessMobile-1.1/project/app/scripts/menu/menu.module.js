(function() {
	'use strict';

	angular
		.module('localbiz.menu', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'scripts/menu/menu.html',
					controller: 'MenuController as vm',
					resolve: {
						account: function(account) {
							return account.init();
						}
					}
				});
		});
})();