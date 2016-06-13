module.exports =  function() {
    return function(input, typeFilter, flavorFilter) {
        var isPouch = typeFilter.pouch;
        var isCone = typeFilter.cone;
        var isBox = typeFilter.box;
        var isFruity = flavorFilter.fruity;
        var isFloral = flavorFilter.floral;
        var isWoody = flavorFilter.woody;
        var isBlend = flavorFilter.blend;

        var output = [];

        function hasTypeFilter(type) {
            return (isBox && type === 'box' || isPouch && type === 'pouch' || isCone && type === 'cone');
        }
        function hasFlavorFilter(flavor) {
            return (isFloral && flavor === 'floral' || isWoody && flavor === 'woody' ||
            isFruity && flavor === 'fruity' || isBlend && flavor === 'blend');
        }

        for (var i = 0; i < input.length; ++i) {
            var product = input[i];

            if (hasTypeFilter(product.type) && hasFlavorFilter(product.flavor)) {
                output.push(product);
            }
        }

        return output;
    };
};
