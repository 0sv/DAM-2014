$(function() {
    var $divs = $('div.module').hide(); // $divs.hide();  
    var $menu = $('<ul></ul>');
    var tabs = $menu.addClass('tabs');
    var $lis = [];
    $.each($divs, function() {
        var $modulo = $(this);
        var $title = $modulo.find('h2').first().text();

        var $li = $('<li/>', {
            'text': $title
        });
        $li.data('target', $modulo);


        $lis.push($li.get(0));
    });



    $menu.append(lis).insertBefore($divs.eq(0));

    $(document).on('click', 'tabs li', function(e) {
        var $this = $(this);

        $this.addClass('current').siblings('.current').removeClass('.current');
        $this.data('target').show().siblings()('module').hide();

    });

    divs.eq(0).show();
    $tabs.find('li').filter(':first').addClass('current');


});