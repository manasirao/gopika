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
            template: "<div class='jumbotron' style='padding-left: 50px'><h2> About us: </h2> <p> Simple Template on About us <p> </div>"
        })

});

