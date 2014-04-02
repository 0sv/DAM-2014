$(document).ready(function() {


    var list = $('li.user');
    var res = $('#result');

    for (var i = 0; i < list.length; i++) {

        var ds = list[i];

        var key_values = [];

        data = $(ds).data();
        for (var key in data) {
            key_values.push([key, data[key]]);

        }

        res.append('<ul></ul>');

        for (var k = key_values.length - 1; k >= 0; k--) {

            res.append('<li>' + key_values[k][0] + ":" + key_values[k][1] + '</li>');

        };

    };
    for (var i = list.length - 1; i >= 0; i--) {
        if ($(list[i]).data('lang') == "es") {
            list[i].dataset.lang = "es_ES"
        }

    };


    for (var i = list.length - 1; i >= 0; i--) {
        if ($(list[i]).data('delete')) {
            $(list[i]).remove();
        }

    };

});