define('dialog2',['utils'],function(utils){
	var bindD2 = function(dialogOptions) {
		$('#'+ dialogOptions.elementId).click(function(){
			var dialogElement;
			dialogElement =  '<div id="'+ dialogOptions.dialogId + '" title="'+ dialogOptions.titel +'" ng-controller="'+dialogOptions.controllerName+'">';
			dialogElement += 'Andra dialogens titel är: ';
			dialogElement += '<span ng-bind="'+dialogOptions.modell+'"></span>';
			dialogElement += '<input ng-model="new_name"/>';
			dialogElement += '</div>';
			$(dialogElement).dialog({
				create: function(){
					if(!utils.isModuleLoaded(dialogOptions.moduleName)) {
						angular.module(dialogOptions.moduleName, [])
						.controller(dialogOptions.controllerName, function($scope){
							$scope.title = dialogOptions.dialogText;
						})
						.directive('testDialog',function(){
							return {
								scope: {
								},
								template: '',
								link: function(scope,element,attrs){
								}
							}
						})
						angular.bootstrap('#'+dialogOptions.dialogId,[dialogOptions.moduleName])
					}
				}
			});
		});
	};
	return {
		initiera: bindD2
	}
});


$(function(){
	//Here is were we used to declare the click event.
});