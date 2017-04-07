'use strict';

superApp.controller('mainCtrl', ['Video', function(Video){

	this.unListado = [];
	for (let i = 0; i < 10; i++){
		this.unListado.push(new Video());
	}


}]);