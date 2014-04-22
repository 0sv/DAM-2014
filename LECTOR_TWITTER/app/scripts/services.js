define('services', ['jquery'], function($) {

    var getTweets = function(apikey, ok, nok) {
        var tws = [];

        var req = $.ajax({
            'url': '/app/data/tweets.json',
            'type': 'GET',
            'dataType': 'JSON',
            success: function(msg) {
                ok('Twits recuperados: ' + msg.statuses.length, msg)
            },
            error: function() {
                nok("No se han obtenido los twits")
            }

        });

    }

    return {
        getTweets: getTweets
    };
});