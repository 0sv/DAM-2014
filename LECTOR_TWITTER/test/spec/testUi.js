/* global describe, it */

(function() {
    'use strict';

    require.config({
        paths: {
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim: {
            handlebars: {
                exports: 'Handlebars'
            },
            'ydn-db': {
                exports: 'ydn'
            }
        },

        baseUrl: '../app/scripts',
        nodeRequire: require

    });

    // VARIABLES DE MODULOS
    var ctrl;
    var db;
    var srv;
    var UI;
    var $;

    //CALLBACKS PARA LOS TEST
    // ERROR
    var callbackNok = function(log) {
        console.log("Nok " + log);
        throw log;

    };
    // SUCCESS
    var callbackOk = function(log) {
        callbackOk.done();
        console.log(log);
    };

    var callbackOkUITweets = function(log, data) {

        assert.strictEqual(true, UI.showTweets.calledOnce, "Error mostrando los tweets");
        assert.strictEqual(100, data.length, "Error con el numero los tweets");
        callbackOkUITweets.done();

    };



    describe('UI module', function() {

        beforeEach(function(done) {

            require(['data', 'services', 'controller', 'ui', 'jquery'], function(data, services, module, ui, jQuery) {
                ctrl = module;
                $ = jQuery;
                db = data;
                srv = services;
                UI = ui;
                done();
            });

        });


        describe('#Check calls to methods', function() {
            beforeEach(function(done) {
                sinon.spy(UI, 'showTweets');
                done();
            });

            it('Call to get tweets exposed in services', function(done) {
                callbackOkUITweets.done = done;
                ctrl.getTweetsFromTwitter(callbackOkUITweets, callbackNok);


            });


            afterEach(function(done) {
                done();
            });

        });





    });

})();