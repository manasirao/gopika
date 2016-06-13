module.exports = function($scope, $log, gpwResource) {
    $log.debug('Home Controller Initialized');
    $scope.featuredList = [];
    $scope.products = [];
    $scope.featuredProducts = [];


    var extractFeaturedProductInfo = function(featured, products) {
        for (var j = 0; j < featured.length; ++j) {
            for (var i = 0; i < products.length; ++i) {
                if (products[i].name === featured[j]) {
                    $scope.featuredProducts.push(angular.copy(products[i]));
                }
            }
        }
    };

    var init = function() {
        gpwResource.getFeaturedProducts(function (featured) {
            if (angular.isDefined(featured)) {
                $scope.featuredList = featured.featured;
                gpwResource.getProducts(function (products) {
                    $scope.products = products;
                    extractFeaturedProductInfo($scope.featuredList, products);
                });
            }
        });
    };



    /* begin execution here */
    init();
};

