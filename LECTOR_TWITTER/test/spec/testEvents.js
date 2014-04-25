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







    describe('DataBase module', function() {
        var $;
        var ctrl;
        var evnt;
        beforeEach(function(done) {
            require(['jquery', 'controller', 'events'], function(jq, control, events) {
                $ = jq;
                ctrl = control;
                done();
            });
        });

        after(function(done) {

            done();

        });

        var eventCallBack = function(success) {

            assert.isTrue(ctrl.showLatestTweets.calledOnce);
            success();

        };

        var datosCambiados = function(done) {

            //  var event = new Event('datachange');
            var event = new CustomEvent('datachange', {
                'detail': {
                    'callback': eventCallBack,
                    'done': done
                }
            });

            document.dispatchEvent(event);

        };

        describe('#LANZAR EVENTOS', function() {
            beforeEach(function(done) {
                sinon.spy(ctrl, 'showLatestTweets');
                done();
            });



            it('Lanzar datachange', function(done) {

                datosCambiados(done);


            });

            afterEach(function(done) {
                ctrl.showLatestTweets.restore();
                done();
            });

        });

    });
})();