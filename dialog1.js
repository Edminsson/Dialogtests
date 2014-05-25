define('dialog1', [],function(){
	var bindD1 = function() {
		$('#oppnadialog1').click(function(){
			var dialog1Element;
			dialog1Element =  '<div id="forstadialogen" title="Dialog Uno" ng-controller="d1Ctrl">';
			dialog1Element += 'Första dialogens titel är: ';
			dialog1Element += '<span ng-bind="title"></span>';
			dialog1Element += '</div>';
			$(dialog1Element).dialog({
				create: function(){
					angular.module('dialog1', [])
					.controller('d1Ctrl', function($scope){
						$scope.title = 'Första dialogen, wiii!';
					});
					angular.bootstrap('#forstadialogen',['dialog1'])
				},
				close: function() {
					//$(dialog1Element).dialog('destroy');
					$(this).dialog('destroy').remove();
				}
			});
		});
	};
	return {
		bindD1: bindD1
	}
});
