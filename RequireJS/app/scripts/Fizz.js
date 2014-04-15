define("Fizz", ['jquery'], function() {

    var test = function(n) {

        var v = '';

        if (n % 3 == 0) {
            v = 'FIZZ';
        }

        return {
            'is': (n % 3 == 0),
            'value': v
        }

    };

    return {

        test: test
    }
});