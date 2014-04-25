define('app', ['controller'], function(controller) {

    'use strict';
    console.log('App started');

    var nok = function(log) {
        console.log('Nok' + log);

    };
    // SUCCESS
    var ok = function(log) {
        console.log('Ok: ' + log);
    };

    controller.getTweetsFromTwitter(ok, nok);
});