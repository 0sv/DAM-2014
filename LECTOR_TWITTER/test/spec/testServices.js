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
        expect($.ajax.calledOnce).to.be.true;
        assert.equal('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
        if (tweets && tweets.statuses && tweets.statuses.length === 100) {
            callbackOkGetTweets.done();
        } else {
            throw "ERROR: " + $(tweets.statuses).length;
        }

    }

    var callbackOkAjax = function(log, tweets) {
        console.log(log);
        expect($.ajax.calledOnce).to.be.true;
        assert.equal('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
        callbackOkAjax.done();
    }

    //

    describe('Services module', function() {
        var services;
        var $;
        beforeEach(function(done) {

            require(['services', 'jquery'], function(module, jQuery) {
                services = module;
                $ = jQuery;
                //console.log($);
                done();
            });

        });


        describe('#Get tweets from cloud', function() {
            beforeEach(function(done) {
                sinon.spy($, 'ajax');
                done();
            });

            it('$.ajax has been called', function(done) {
                callbackOkAjax.done = done;
                services.getTweets("foo_apikey", callbackOkAjax, callbackNok);


            })

            it('get all tweets', function(done) {
                callbackOkGetTweets.done = done;
                services.getTweets("foo_apikey", callbackOkGetTweets, callbackNok);


            });

            afterEach(function(done) {
                $.ajax.restore();
                done();
            });

        });





    });

})();