module.exports = function($scope, gpwResource) {
	console.log('Product Controller Initialized');
	$scope.products = [];
	$scope.box = true;
    $scope.cone = true;
    $scope.pouch = true;
    $scope.Economy = true;

	$scope.showInfo = function() {
		console.log("On showInfo");
	};

    gpwResource.getProducts(function(data) {
        $scope.products = data;
    });

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
