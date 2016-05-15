var app = angular.module('gopikaApp');

var productGrid = function() {
    console.log("Gpw Product Grid Template");
    return {
        restrict: 'A',
        templateUrl: 'js/product-grid-template.html'
    };
};
app.directive('gpwProductGrid', productGrid);