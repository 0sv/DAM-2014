define('controller', ['data', 'services', 'ui'], function(db, srv, ui) {
    'use strict';

    // var ok = function() {
    //     console.log('OK guardar');
    // };

    // var nok = function() {
    //     console.log('NOK guardar');
    // };

    var processTwits = function(log, data) {

        var tweets = [];
        if (data && data.statuses && data.statuses.length > 0) {
            var tw;
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                tw = {
                    'id': data.statuses[i].id_str,
                    'text': data.statuses[i].text,
                    'user': data.statuses[i].user.name,
                    'userpic': data.statuses[i].user.profile_image_url,
                    'time': new Date(data.statuses[i].created_at)
                };
                tweets.push(tw);
            }
        }
        console.log('TWEETS PROCESADOS : ' + tweets.length);
        // console.log(tweets);
        console.log('MOSTRANDO TWEETS');
        ui.showTweets(tweets);
        //  console.log('GUARDANDO TWEETS');
        //  db.addTweets(tweets, processTwits.ok, processTwits.nok);
    };

    var processTwitsAndSave = function(log, data) {
        console.log('processTwitsAndSave');
        console.log(log);
        console.log(data);
        var tweets = [];
        if (data && data.statuses && data.statuses.length > 0) {
            var tw;
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                tw = {
                    'id': data.statuses[i].id_str,
                    'text': data.statuses[i].text,
                    'user': data.statuses[i].user.name,
                    'userpic': data.statuses[i].user.profile_image_url,
                    'time': new Date(data.statuses[i].created_at)
                };
                tweets.push(tw);
            }
        }
        console.log('TWEETS CREADOS : ' + tweets.length);
        // console.log(tweets);
        console.log('MOSTRANDO TWEETS');
        ui.showTweets(tweets);
        console.log('GUARDANDO TWEETS');
        db.addTweets(tweets, processTwitsAndSave.ok, processTwitsAndSave.nok);
    };

    var errorProcessingTweets = function(log, e) {
        console.log(log);
        throw e;
    };

    var showLatestTweets = function(ok, nok) {
        processTwits.ok = ok;
        processTwits.nok = nok;

        db.getAllTweet('apiKey', processTwits, nok);
    };

    var getTweetsFromTwitter = function(ok, nok) {
        processTwitsAndSave.ok = ok;
        processTwitsAndSave.nok = nok;

        srv.getTweets('apiKey', processTwitsAndSave, nok);


    };

    return {
        getTweetsFromTwitter: getTweetsFromTwitter,
        showLatestTweets: showLatestTweets
    };

});