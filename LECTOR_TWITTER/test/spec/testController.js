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

    // VARIABLES DE MODULOS
    var ctrl;
    var db;
    var srv;
    var $;

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

    var callbackOkSrvTweets = function(log) {

        assert.strictEqual(true, srv.getTweets.calledOnce, "Error obteniendo los tweets");
        assert.strictEqual(true, db.addTweets.calledOnce, "Error guardando los tweets");

        callbackOkSrvTweets.done();
        console.log("CBST: " + log);
    }



    describe('ctrl module', function() {

        beforeEach(function(done) {

            require(['data', 'services', 'controller', 'jquery'], function(data, services, module, jQuery) {
                ctrl = module;
                $ = jQuery;
                db = data;
                srv = services;
                done();
            });

        });


        describe('#Check calls to methods', function() {
            beforeEach(function(done) {
                sinon.spy(srv, 'getTweets');
                sinon.spy(db, 'addTweets');
                done();
            });

            it('Call to get tweets exposed in services', function(done) {
                callbackOkSrvTweets.done = done;
                ctrl.getTweetsFromTwitter(callbackOkSrvTweets, callbackNok);


            });


            afterEach(function(done) {
                done();
            });

        });





    });

})();