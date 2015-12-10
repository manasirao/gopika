var app = angular.module('gopikaApp');
app.controller('productCtrl', function($scope, $http) {
	console.log('Product Controller Initialized');
	$scope.products = [];
    $http.defaults.cache = false;
	
	$scope.showInfo =function() {
		console.log("On showInfo");
	}
	var getProductInfo = function() {
			$http({method: 'GET', url: '/products.json'
			}).then(function successResp(response) {
				console.log("Product Received: " + JSON.stringify(response));
				$scope.products = response.data;
			});
	}
	getProductInfo();
});
