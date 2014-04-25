define('data', ['ydn-db'], function(ydn) {
    'use strict';
    console.log('Data module started');

    var dbName = 'TwitterDB',
        keyPath = 'id',
        tweetTable = 'twitter',
        db = new ydn.db.Storage(dbName);

    var addTweet = function(tweet, success, error) {
        var req = db.put({
            name: tweetTable,
            keyPath: keyPath
        }, tweet);
        req.done(success);
        req.fail(error);
    };



    var addTweets = function(tweets, success, error) {
        var req = db.put({
            name: tweetTable,
            keyPath: keyPath
        }, tweets);
        req.done(function(e) {
            console.log('DATABASE RECORDS');
            // datosCambiados();
            success('DB Ok', e);
        });
        req.fail(function(e) {
            error('DB ERROR: ' + e);
        });
    };

    var getTweet = function(id, success, error) {
        var req = db.get(tweetTable, id);
        req.done(success);
        req.fail(error);
    };

    var getAllTweet = function(id, success, error) {
        var req = db.values(tweetTable);
        req.done(function(e) {
            console.log('DATABASE ALL RECORDS');
            success('DB Ok', e);
        });
        req.fail(function(e) {
            console.log('DATABASE ERROR ON GET ALL RECORDS');
            error('DB ERROR: ' + e);
        });
    };

    var updateTweet = function(tweet, success, error) {
        getTweet(tweet.id, function(t) {
            if (t) {
                var req = db.put({
                    name: tweetTable,
                    keyPath: keyPath
                }, tweet);
                req.done(success);
                req.fail(error);
            } else {
                error('There is no tweet with id ' + tweet.id);
            }
        }, error);
    };

    var removeTweet = function(id, success, error) {
        getTweet(id, function(tweet) {
            if (tweet) {
                var req = db.remove(tweetTable, id);
                req.done(success);
                req.fail(error);
            } else {
                error('There is no tweet with id ' + id);
            }
        });
    };

    var clear = function(success, error) {
        var req = db.clear(tweetTable);
        req.done(success);
        req.fail(error);
    };

    var datosCambiados = function() {

        var event = new Event('datachange');

        document.dispatchEvent(event);
        console.log('EVENTO LANZADO');
    };

    return {
        addTweet: addTweet,
        addTweets: addTweets,
        getTweet: getTweet,
        updateTweet: updateTweet,
        removeTweet: removeTweet,
        clear: clear,
        getAllTweet: getAllTweet
    };
});