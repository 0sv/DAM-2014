$(function() {






    var listam = function(event, t) {



        if (event.keyCode == 13) {
            console.log("ENTER");

            return;
        }

        if (event.keyCode == 38) {
            console.log("UP");
            $('.current').prev().addClass('.current').siblings().removeClass('.current');
            return;
        }

        if (event.keyCode == 40) {
            console.log("DOWN");
            $('.current').next().addClass('.current').siblings().removeClass('.current');
            return;
        }


        if (t.length === 0) {

            $.each($("#sugerencias").children(), function(index, el) {
                $(this).remove();
            });
        } else {

            $.ajax({
                dataType: "json",
                type: 'POST',
                url: "servidor/autocompletaMunicipios.php",
                data: {
                    municipio: t //($('#prov').val())
                },
                success: function(json, textStatus) {
                    console.log(t);

                    $.each($("#sugerencias").children(), function(index, el) {
                        $(this).remove();
                    });

                    if (json.length === 0) {
                        $('#sugerencias').append($('<li/>', {
                            'text': "No hay sugerencias"
                        }));
                    } else {
                        $.each(json, function(key, value) {
                            $('#sugerencias').append($('<li/>', {
                                'text': value
                            }));
                        });

                    }
                    $("#sugerencias").children().first().addClass('current').siblings().removeClass('current');
                }
            });


        }
    };




    $(document).on('keyup', '#mun', function(event) {
        listam(event, $(this).val()); // Valor de la caja de texto.
    });
    /*$(document).on('keypress', '#mun', function(event) {
        listam($(this).val()); // Valor de la caja de texto.
    });*/

});