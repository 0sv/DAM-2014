$(function() {

    $(document).on('click', '#comprobar', function(e) {

        e.preventDefault();

        $.ajax({
            dataType: "json",
            url: "servidor/compruebaDisponibilidadJSON.php",
            data: $('#login').val(),
            success: function(json, textStatus) {
                if (textStatus == "success") {
                    console.log(json);

                    var $spam = $('#disponibilidad').append($('<spam/>', {
                        'text': "Disponible: " + json.disponible
                    }));

                    if (json.disponible === "no") {
                        $(json.alternativas).each(function(index, el) {
                            $spam.append($('<spam/>', {
                                'text': $(el).val()
                            }));
                        });

                    }


                }
            }
        });
    });
});