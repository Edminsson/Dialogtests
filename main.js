(function(){
	requirejs.config({
		baseUrl:'./'
	});
	require(['app','dialog1','dialog2'],function(mainangular, dialog1, dialogFactory){
		mainangular.initiera();
		dialog1.bindD1();
		dialogFactory.initiera({
			elementId: 'oppnadialog2',
			dialogId: 'andradialogen',
			titel: 'Den andra',
			modell: 'title',
			moduleName: 'dialog2',
			controllerName: 'd2Ctrl',
			dialogText: 'Här har vi dialog 2'
		});
	})
})();