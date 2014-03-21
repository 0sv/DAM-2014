$(function() {

    var frase = function(data) {

        $.get('../servidor/generaContenidos.php', function(data) {
            var now = new Date();
            var displayDate = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            $('#ticker').append('<span/>').text(displayDate + " - " + data).addClass("hover");
            setTimeout(function() {
                $('#ticker').append('<span/>').text(displayDate + " - " + data).removeClass("hover")
            }, 500);

        });
    };

    $(document).on('click', '#detener', function(event) {
        clearInterval(intervalo);
    });

    var intervalo = setInterval(frase, 2000);

});