module.exports = function($scope, $http) {
	console.log('Product Controller Initialized');
	$scope.products = [];
	$scope.box = true;
    $scope.cone = true;
    $scope.pouch = true;
    $scope.Economy = true;
    $http.defaults.cache = false;

	$scope.showInfo = function() {
		console.log("On showInfo");
	};
	var getProductInfo = function() {
            console.log('Ravi Getting Product');
			$http({method: 'GET', url: 'products.json?nocache=' + (new Date()).getTime()
			}).then(function successResp(response) {
				console.log("Product Received: " + JSON.stringify(response));
				$scope.products = response.data;
			});
	};
	getProductInfo();

    $scope.similarProd = [];
    $scope.getProductGroup = function(index) {
        var group = $scope.products[index].productGroup;
        $scope.similarProd.length = 0;
        console.log("clicked: " + group);

        angular.forEach($scope.products, function(product, key) {
            if(product.productGroup === group && key !== index) {
                $scope.similarProd.push(product);

            }
        });
        console.log($scope.similarProd);
    };
};
