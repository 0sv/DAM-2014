define('ui', ['quo', 'handlebars'], function($, Handlebars) {
    'use strict';
    var showTweets = function(twit) {


        var lista = $('#twitter-list');
        var source = $('#tpl-listatweets').html();
        var template = Handlebars.compile(source);

        var _twit = [];

        for (var i = twit.length - 1; i >= 0; i--) {
            _twit.push(twit[i]);
        }

        var context = {
            twit: _twit
        };

        var html = template(context);

        lista.html(html);

    };



    return {
        showTweets: showTweets
    };

});