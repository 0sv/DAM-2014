define(['controller'], function(ctrl) {
    'use strict';
    console.log('App started');

    var nok = function(log) {
        console.log('Nok' + log);

    };
    // SUCCESS
    var ok = function(log) {
        console.log('Ok: ' + log);
    };
    ctrl.getTweetsFromTwitter(ok, nok);
});