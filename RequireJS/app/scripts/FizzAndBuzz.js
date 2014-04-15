define("FizzAndBuzz", ['jquery'], function() {

    var test = function(n) {


        var v = '';

        if (n % 15 == 0) {
            v = 'FIZZ BUZZ';
        }

        return {
            'is': (n % 15 == 0),
            'value': v
        }

    };

    return {

        test: test
    }
});