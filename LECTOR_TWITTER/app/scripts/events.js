define('events', ['quo', 'controller'], function($, ctrl) {
    'use strict';

    var callbackNok = function(log) {
        console.log('EVENTS Nok');
        throw log;

    };
    // SUCCESS
    var callbackOk = function(log) {
        console.log('EVENTS Ok');
        callbackOk.done();
        console.log(log);
    };


    var tweetsUpdated = function(ok, nok) {
        ctrl.showLatestTweets(ok, nok);
    };

    $(document).on('datachange', '', function(event) {
        event.preventDefault();
        tweetsUpdated(callbackOk, callbackNok);
        console.log(event.originalEvent.detail);
        event.originalEvent.detail.callback(event.originalEvent.detail.done);
        console.log('EVENTO ESCUCHADO');



    });


});