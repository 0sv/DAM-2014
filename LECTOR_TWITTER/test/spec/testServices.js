/* global describe, it */

(function() {
    'use strict';

    require.config({
        paths: {
            jquery: '../bower_components/jquery/dist/jquery',

        },

        baseUrl: '../app/scripts',
        nodeRequire: require

    });

    //CALLBACKS PARA LOS TEST
    // ERROR
    var callbackNok = function(log) {
        console.log("Nok");
        throw log;

    }
    // SUCCESS
    var callbackOk = function(log) {
        callbackOk.done();
        console.log(log);
    }


    var callbackOkGetTweets = function(log, tweets) {

        console.log(log);
        console.log(tweets);
        if (tweets && tweets.statuses && tweets.statuses.length === 100) {
            callbackOkGetTweets.done();
        } else {
            throw "ERROR: " + $(tweets.statuses).length;
        }

    }

    //

    describe('Services module', function() {
        var services;
        beforeEach(function(done) {
            require(['services'], function(module) {
                services = module;
                done();
            });
        });

        describe('#Get tweets from cloud', function() {
            it('get all tweets', function(done) {
                callbackOkGetTweets.done = done;
                services.getTweets("foo_apikey", callbackOkGetTweets, callbackNok);


            });
        });


    });

})();