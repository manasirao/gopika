module.exports = ['$scope', 'gpwResource', '$log', function($scope, gpwResource, $log) {
	$log.debug('Product Controller Initialized');

    $scope.typeFilter = {
        box: true,
        cone: true,
        pouch: true
    };

    $scope.flavorFilter = {
        woody: true,
        floral: true,
        blend: true,
        fruity: true
    };

    $scope.resetFilters = function() {
        $scope.typeFilter = {box: true, cone: true, pouch: true};
        $scope.flavorFilter = {woody: true, floral: true, blend: true, fruity: true};
    };

    $scope.$watch('typeFilter', function(oldVal, newVal) {
        evalReset();
    }, true);

    $scope.$watch('flavorFilter', function(oldVal, newVal) {
        evalReset();
    }, true);

    var evalReset = function() {
        $scope.showReset = !($scope.typeFilter.box && $scope.typeFilter.cone && $scope.typeFilter.pouch &&
        $scope.flavorFilter.woody && $scope.flavorFilter.floral && $scope.flavorFilter.blend && $scope.flavorFilter.fruity);
    };

	$scope.products = [];

	$scope.showInfo = function() {
		$log.debug("On showInfo");
	};

    gpwResource.getProducts(function(data) {
        $scope.products = data;
    });

    $scope.similarProd = [];
    $scope.getProductGroup = function(index) {
        var group = $scope.products[index].productGroup;
        $scope.similarProd.length = 0;
        $log.debug("clicked: " + group);

        angular.forEach($scope.products, function(product, key) {
            if(product.productGroup === group && key !== index) {
                $scope.similarProd.push(product);

            }
        });
        $log.debug($scope.similarProd);
    };
    evalReset();
}];
