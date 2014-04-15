define("FizzBuzz", ['jquery'], function() {



    var fizzTest = function(n) {
        if (n % 3 == 0) {
            return 'FIZZ';
        }
        return '';
    };

    var buzzTest = function(n) {
        if (n % 5 == 0) {
            return 'BUZZ';
        }
        return '';
    };

    var testnumber = function(n) {


        var r = fizzTest(n) + " " + buzzTest(n);

        if (r.length == 1) {
            return n;
        }

        return $.trim(r);


    };



    var testlist = function(n) {

        var s = "";

        for (var i = 1; i <= n; i++) {
            s = s + testnumber(i) + ',';
        };

        console.log("Para el número " + n);
        console.log("La cadena es: " + s.substring(0, s.length - 1));
        return s.substring(0, s.length - 1);

    };

    return {
        testnumber: testnumber,
        testlist: testlist
    }

});