/**
 * Created by Ravikiran Ramachandra on 5/18/16.
 */

var moduleName = 'gopikaApp';

var app = angular.module(moduleName, ['ui.router']);

app.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    console.log("Gopika UI Router");
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    console.log(JSON.stringify($state));
}]);


app.config(require('./route.js'));


app.constant('HomeTemplate', require('../templates/home-template.html'));
app.constant('ContactTemplate', require('../templates/contact-template.html'));
app.constant('AboutTemplate', require('../templates/about-template.html'));
app.constant('ProductTemplate', require('../templates/product-template.html'));

app.controller('homeCtrl', require('./home-ctrl.js'));
app.controller('productCtrl', require('./product-ctrl.js'));
app.filter('gpwProdType', require('./product-type-filter.js'));
app.constant('SimilarProductTemplate', require('./product-similar-template.html'));
app.directive('gpwSimilarProd', require('./product-similar-directive.js'));
app.constant('ProductGridTemplate', require('./product-grid-template.html'));
app.directive('gpwProductGrid', require('./product-grid-directive.js'));
app.constant('FeaturedProductTemplate', require('./featured-template.html'));
app.directive('gpwFeaturedGrid', require('./featured-directive.js'));

app.service('gpwResource', require('./resources.js'));

module.exports = moduleName;