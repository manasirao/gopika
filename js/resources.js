module.exports = function($http, $log) {
    var getProducts = function(done) {
        $log.debug('Getting Products');
        $http({method: 'GET', url: 'products.json?nocache=' + (new Date()).getTime()
        }).then(function successResp(response) {
            //console.log("Products Received: " + JSON.stringify(response));
            done(response.data);
        });
    };

    var getFeaturedProducts = function(done) {
        $log.debug('Getting Featured Products');
        $http({method: 'GET', url: 'featured-products.json?nocache=' + (new Date()).getTime()
        }).then(function successResp(response) {
            //console.log("featured Received: " + JSON.stringify(response));
            done(response.data);
        });
    };

    this.getProducts = getProducts;
    this.getFeaturedProducts = getFeaturedProducts;
};
