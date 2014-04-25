define('services', ['quo'], function($) {
    'use strict';
    console.log("service modules started");
    var getTweets = function(apikey, ok, nok) {

        console.log("service modules called");
        var req = $.ajax({
            'url': '/app/data/tweets.json',
            'type': 'GET',
            'dataType': 'JSON',
            success: function(msg) {
                console.log("AJAX OK");
                ok('Twits recuperados', $.JSONParse(msg));
            },
            error: function() {
                console.log("AJAX NOK");
                nok('No se han obtenido los twits');
            }

        });

    };

    return {
        getTweets: getTweets
    };
});