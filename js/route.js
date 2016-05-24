module.exports = function($stateProvider, $urlRouterProvider, MainTemplate, AboutTemplate, ProductTemplate, ContactTemplate) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            template: MainTemplate
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

