define("Buzz", ['jquery'], function() {



    var test = function(n) {

        var v = '';

        if (n % 5 == 0) {
            v = 'BUZZ';
        }

        return {
            'is': (n % 5 == 0),
            'value': v
        }

    };

    return {
        test: test
    }

});