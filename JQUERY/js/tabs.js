$(function() {
    var $divs = $('div.module').hide(); // $divs.hide();  
    var $menu = $('<ul></ul>');
    $.each($divs, function() {
        $menu.append($('<li>' + $(this).find('h2').text() + '</li>')
            .data('tab', $(this))
            .on('click', function() {
                $(this).addClass('current').data('tab').show();
                $(this).siblings().removeClass('current').data('tab').hide();
            })
        );
        $menu.insertBefore($divs.first());
    });
});