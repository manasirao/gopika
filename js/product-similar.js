var app = angular.module('gopikaApp');

var productSimilar= function() {
    console.log("Gpw Product Similar");
    return {
        restrict: 'A',
        templateUrl: 'js/product-similar.html'
    };
};
app.directive('gpwSimilarProd', productSimilar);