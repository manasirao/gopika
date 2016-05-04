var app = angular.module('gopikaApp');

app.filter('gpwProdType', function() {
    console.log('Gopika Product Type Filter');

    return function(input, isBox, isPouch, isCone, isEconomy) {
        console.log('Filter: box:' + isBox + 'isPouch:' + isPouch + ' isCone:' + isCone);
        var output = [];
        if(isBox === false && isPouch === false && isCone === false && isEconomy ===false) {
            output = input;
            return output;
        }
        for (var i = 0; i < input.length; ++i) {
            var product = input[i];

            if (isBox && product.type === 'box') {
                output.push(product);
            }
            if (isPouch && product.type === 'pouch') {
                output.push(product);
            }
            if (isCone && product.type === 'cone') {
                output.push(product);
            }
            if (isEconomy && product.type === 'Economy') {
                output.push(product);
            }
        }
        return output;
    }
});
