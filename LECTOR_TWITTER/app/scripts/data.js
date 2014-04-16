define("data", ['ydn-db'], function(ydn) {

    var dbname = 'db-twdb';
    var storename = 'tweetStorage'

    var db = new ydn.db.Storage(dbname)

    var saveTweet = function(objTw, callbackOk, callbackNok) {
        var req = db.put(storename, objTw, objTw.id);
        req.done(function() {
            callbackOk("saveDone");
        });
        req.fail(function(e) {
            callbackNok(e);
        });

    }


    var getAllTweet = function(callbackOk, callbackNok) {

        var req = db.values(storename);
        req.done(function(records) {
            callbackOk("getAllDone", records);

        });
        req.fail(function(e) {
            callbackNok(e);
        });


    }

    var getTweet = function(id, callbackOk, callbackNok) {

        var req = db.get(storename, id);
        req.done(function(record) {
            callbackOk("getDone", record);

        });
        req.fail(function(e) {
            callbackNok(e);
        });


    }

    var updateTweet = function(tweet, callbackOk, callbackNok) {

        saveTweet(tweet, callbackOk, callbackNok);

    }

    var deleteTweet = function(id, callbackOk, callbackNok) {
        var req = db.remove(storename, id);
        req.done(function(record) {
            callbackOk("removeDone", record);

        });
        req.fail(function(e) {
            callbackNok(e);
        });
    }


    return {
        saveTweet: saveTweet,
        getAllTweet: getAllTweet,
        getTweet: getTweet,
        updateTweet: updateTweet,
        deleteTweet: deleteTweet
    }

});