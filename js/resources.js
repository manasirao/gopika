module.exports = function($http) {
    var getProducts = function(done) {
        console.log('Ravi Getting Products');
        $http({method: 'GET', url: 'products.json?nocache=' + (new Date()).getTime()
        }).then(function successResp(response) {
            //console.log("Products Received: " + JSON.stringify(response));
            done(response.data);
        });
    };

    var getFeaturedProducts = function(done) {
        console.log('Ravi Getting Featured Products');
        $http({method: 'GET', url: 'featured-products.json?nocache=' + (new Date()).getTime()
        }).then(function successResp(response) {
            //console.log("featured Received: " + JSON.stringify(response));
            done(response.data);
        });
    };


    this.getProducts = getProducts;
    this.getFeaturedProducts = getFeaturedProducts;
};
