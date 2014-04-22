define('controller', ['data', 'services', 'jquery'], function(db, srv, $) {


    var ok = function() {
        console.log("OK guardar");
    }

    var nok = function() {
        console.log("NOK guardar");
    }


    var processTwits = function(log, data) {
        console.log("LOG: " + log);
        var tweets = [];

        if (data && data.statuses && data.statuses.length > 0) {
            var tw;
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                tw = {
                    'id': data.statuses[i].id_str,
                    'text': data.statuses[i].text,
                    'user': data.statuses[i].user.name,
                    'userpic': data.statuses[i].profile_image_url,
                    'time': new Date(data.statuses[i].created_at)
                };

                tweets.push(tw);

            };

        }
        console.log("TWEETS CREADOS : " + tweets.length);
        console.log(tweets);
        db.addTweets(tweets, processTwits.ok, processTwits.nok);

    }


    var getTweetsFromTwitter = function(ok, nok) {
        processTwits.ok = ok;
        processTwits.nok = nok;

        srv.getTweets('apiKey', processTwits, nok);


    }

    return {
        getTweetsFromTwitter: getTweetsFromTwitter
    }

});