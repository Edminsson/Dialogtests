define('app',[], function(){
	var initiera = function() {
		var app=angular.module('app', [])
		.controller('mainCtrl', function($scope){
			$scope.person = {name:'anders'};
		});

		angular.element(document).ready(function(){
			angular.bootstrap('#avd1', ['app'])
			//angular.bootstrap(document, ['app']);
		});
	};
	return {
		initiera: initiera
	}
});


