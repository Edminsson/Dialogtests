define('utils',[],function(){
	var isModuleLoaded = function(moduleName) {
		var d2Module;
		try {
			var d2Module = angular.module(moduleName);
		}
		catch(error) {
			//alert('Modulen finns inte');
		}
		return !!d2Module
	}
	return {
		isModuleLoaded: isModuleLoaded
	}
})