//$(function() {
//$("footer").load('include/commonFooter.html');
//});

$("#index, #page2-view1, #page2-view2").bind("pagebeforecreate", function(event) {
    console.log("pagebeforecreate");

    var htmlFooter = "<h4>This is my footer</h4>" +
        "<div data-role='navbar' data-iconpos='top'>" +
        "<ul><li><a href='#' data-icon='star'>One</a></li>" +
        "<li><a href='#' data-icon='gear'>Two</a></li>" +
        "<li><a href='#' data-icon='back'>Three</a></li></ul>" +
        "</div>";

    //$("footer").html(htmlFooter, function() {
    //   $("footer").trigger("create");
    //});

    $("footer").load("include/commonFooter.html", function() {
        $("footer").trigger("create");
        $("footer").trigger("refresh");

    });







    $('#eventos').bind('swipeleft', function(e) {
        // console.log(e);
        console.log($.event.special.swipe);
        $('#estado').text('swipping');
        $('#direccion').text('izquierda');
        $('#distancia').text(e.swipestart.coords[0] - e.swipestop.coords[0]);


    });


    $('#eventos').bind('swiperight', function(e) {
        console.log($.event.special.swipe);

        $('#estado').text('swipping');
        $('#direccion').text('derecha');
        $('#distancia').text(e.swipestop.coords[0] - e.swipestart.coords[0]);
    });

    $('#eventos').bind('tap', function(e) {
        $('#estado').text('Tap');
        $('#direccion').text('¬_¬');
        $('#distancia').text('¬_¬U');
    });

    $('#eventos').bind('taphold', function(event) {
        $('#estado').text('Taphold');
        $('#direccion').text('¬_¬');
        $('#distancia').text('¬_¬U');
    })

    $.event.special.swipe.horizontalDistanceThreshold = 100;
    $.event.special.swipe.verticalDistanceThreshold = 50;
    $.event.special.swipe.durationThreshold = 2000;


});