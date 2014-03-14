$(function() {
    'use strict';

    var $boxes = $('.box');

    // setInterval(function() {

    //     $boxes.animate({
    //         'height': '50px',
    //         'width': '50px',
    //         'color': 'yellow',
    //         'background-color': 'red',
    //         'font-size': '18px',
    //         'left': '100%',
    //     }, 80);
    // }, 100);

    $boxes.css({
        'height': '50px',
        'width': '50px',
        'color': 'yellow',
        'background-color': 'blue',
        'font-size': '18px',
        '-webkit-transform': 'translateX(' + ($(document).width() - 100) + 'px)',
        '-webkit-transition-property': 'all',
        '-webkit-transition-duration': '2s'

    });


});