$(function() {
    var $divs = $('div.module');
    // console.log($divs[0]);

    var $li = $('#myList li').eq(2);
    // console.log($li[0]);
    var $li = $('#myList').find('li').eq(2);
    // console.log($li[0]);
    var $li = $('#myList li:nth-child(2)').eq(2);
    // console.log($li[0]);
    var $li = $('#myListItem');
    // console.log($li[0]);

    var $la = $('input.input_text').prev();
    // console.log($la[0]);



    var $input = $('input.input_text');

    var $la = $input.closest('form').find('label[for="' + $input.attr('name') + '"]');

    // console.log($la[0]);

    var $hc = $(':hidden');
    // console.log($hc);
    var $ac = $('img[alt]');
    //console.log($ac);

    var $tbo = $('tbody tr:even').css('background-color', 'gray');
    //console.log($tbo);

    ////////////////////////////////////////////////////////////////////7

    var $img = $('img');
    // for (var i = $img.length - 1; i >= 0; i--) {
    //     console.log($img[i]['alt']);
    // };
    $img.each(function() {
        console.log(this.alt);
    });

    // var $input = $('input.input_text');

    $input.closest('form').addClass('Formulario-del-input');


    var $current = $('#myList .current');
    var $next = $current.next();
    console.log($current, $next);

    $current.removeClass('current');
    $next.addClass('current');


    $especial = $('#specials');

    $select = $especial.find('select');
    $formSelect = $select.closest('form');
    $submitbtn = $formSelect.find('[type="submit"');

    console.log($select, $submitbtn);

    // $slideshow = $('#slideshow');

    $('#slideshow li:first-child').addClass('current').siblings().addClass('disabled');


    ////////////////////////////////////////////////////////////////////


    $li = $('#myList');

    var newItems = [];
    start = new Date();
    for (var i = $li.children().length + 1; i < $li.children().length + 6; i++) {
        newItems.push('<li>New item ' + i + '</li>');
    }
    $li.append(newItems.join(''));

    middle = new Date();

    // for (var i = 5000; i >= 0; i--) {
    //     $('<li>New item ' + i + '</li>').appendTo($('#myList'));
    // };

    end = new Date();
    console.log((middle - start).toString() + " Vs " + (end - start).toString());

    $('#myList li:even').remove();


    $('div.module:last h2').clone().appendTo('div.module:last')
    $('div.module:last p').clone().appendTo('div.module:last')



    $('#specials').find('select').append('<option value = "wednesday" > Wednesday </option>');


    //$img = $('img');

    // $('div.module').last().parent().append('<div class="module" id="images">');
    // $img = $('img');
    // $('div.module').last().append($img[0]);

    $('div.module').last().parent().append('<div class="module" id="images">').append($('img').first().clone());

    // $('div.module').last().parent().append('<div/>', {
    //     'class': 'module',
    //     'id': 'myId'
    // }).append($('img').first().clone());
});