module.exports = function($stateProvider, $urlRouterProvider, HomeTemplate, AboutTemplate, ProductTemplate, ContactTemplate) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            template: HomeTemplate,
            controller: 'homeCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            template: AboutTemplate
          })
        .state('products', {
              url: "/products",
              template: ProductTemplate,
              controller: 'productCtrl'
        })
        .state('contact', {
            url: "/contact",
            template: ContactTemplate
        });
};
