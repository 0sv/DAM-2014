/* global describe, it */

(function() {
    'use strict';

    require.config({
        paths: {
            jquery: '../bower_components/jquery/dist/jquery',
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            }
        },
        baseUrl: '../app/scripts',
        nodeRequire: require

    });

    //CALLBACKS PARA LOS TEST


    var cbTest;
    var callbackOk = function(log) {
        callbackOk.done();
        console.log(log);

    }

    var callbackNok = function(log) {
        console.log("Nok");
        throw log;

    }

    var callbackOkGAT = function(log, result) {
        callbackOkGAT.done();
        console.log(result);

    }

    var callbackOkGA = function(log, result) {
        callbackOkGA.done();
        console.log(result);

    }

    var callbackOkDel = function(log, result) {
        callbackOkDel.done();
        assert.isNumber(result)
        console.log(log);

    }

    //

    describe('Test for DB', function() {
        var DB;
        beforeEach(function(done) {
            require(['data'], function(module) {
                DB = module;
                done();
            });
        });

        describe('store the data', function() {
            it('Add some tweets', function(done) {
                callbackOk.done = done;
                DB.addTweet({
                    'id': '123456789',
                    'text': "Ola K Ase"
                }, callbackOk, callbackNok);


            });
        });

        describe('get the data', function() {
            it('get all tweets', function(done) {
                callbackOkGAT.done = done;
                var r = DB.getAllTweet(callbackOkGAT, callbackNok);


            });

        });

        describe('get data from id', function() {
            it('get one tweet', function(done) {
                callbackOkGA.done = done;
                var r = DB.getTweet('123456789', callbackOkGA, callbackNok);


            });

        });

        describe('update data from id', function() {
            it('update one tweet', function(done) {
                callbackOkGA.done = done;

                var r = DB.updateTweet({
                    'id': '123456789',
                    'text': "Twitteas o K Ase"
                }, callbackOkGA, callbackNok);


            });

        });

        describe('delete data from id', function() {
            it('delete one tweet', function(done) {
                callbackOkDel.done = done;

                DB.deleteTweet('123456789', callbackOkDel, callbackNok);


            });

        });



    });

})();