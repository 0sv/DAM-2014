define("FizzBuzz", ['jquery', 'Fizz', 'Buzz', 'FizzAndBuzz'], function() {

    // arguments
    var tests = [];
    // Que argumentos son tests
    for (var a = 0; a < arguments.length; a++) {
        if (arguments[a].hasOwnProperty('test')) {
            tests.push(arguments[a]);
        }

    }

    var testnumber = function(n) {
        if (typeof n === "undefined" || n == null || $.trim(n.toString()).length === 0 || !$.isNumeric(n)) {
            return "";
        }
        //var tests = [Fizz, Buzz, FizzAndBuzz];

        var r = n;
        for (var i = 0; i < tests.length; i++) {
            if (tests[i].test(n).is) {
                r = tests[i].test(n).value
            }
        };
        return r;
    };



    var testlist = function(n) {
        if (typeof n === "undefined" || n == null || $.trim(n.toString()).length === 0 || !$.isNumeric(n)) {
            return "";
        }
        var s = "";
        for (var i = 1; i <= n; i++) {
            s = s + testnumber(i) + ',';
        };
        //  console.log("Para el número " + n);
        //  console.log("La cadena es: " + s.substring(0, s.length - 1));
        return s.substring(0, s.length - 1);
    };

    return {
        testnumber: testnumber,
        testlist: testlist
    }

});