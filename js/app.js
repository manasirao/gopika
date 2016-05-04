/**
 * Created by rramachandra on 2015-11-13.
 */

var app = angular.module('gopikaApp', [
    'ui.router']);

app.run([ '$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    console.log("Gopika Ui Router");
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    console.log(JSON.stringify($state));
}]);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'home-tab/main-template.html'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: 'home-tab/about-template.html'
          })
        .state('products', {
              url: "/products",
              templateUrl: 'home-tab/product-template.html',
              controller: 'productCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: 'home-tab/contact-template.html'
        })

});

