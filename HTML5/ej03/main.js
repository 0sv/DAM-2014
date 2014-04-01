$(document).ready(function() {





    $(document).on('blur', 'input', function(event) {

        var valarr = [];
        var validos = 0;


        var inputs = $('#form').find('input');


        // console.log(event);


        for (var i = inputs.length - 1; i >= 0; i--) {

            if (inputs[i].validity.valid && $(inputs[i]).val().length > 0) {

                valarr[i] = 1;

            } else {
                valarr[i] = 0;
            }


            //console.log(event);


            // console.log($(inputs[i]).attr('type') + " -> " + inputs[i].type);
            if (Modernizr._prefixes.join(inputs[i].type)) {




                // console.log("tipo: " + inputs[i].type + " SOPORTADO ");
                $(inputs[i]).removeClass('testmdnz');
            } else {
                // console.log("tipo: " + inputs[i].type + " NO SOPORTADO ");
                $(inputs[i]).addClass('testmdnz');
            }

            if ($(inputs[i]).attr('type') != inputs[i].type) {
                //console.log("TIPO NO SOPORTADO CAMBIADO POR TEXT");
                $(inputs[i]).addClass('testmdnz');
            } else {
                //console.log("TIPO SOPORTADO NO HAY CAMBIO");
                $(inputs[i]).removeClass('testmdnz');
            }





        };

        for (var i = valarr.length - 1; i >= 0; i--) {
            if (valarr[i] == 1) {
                validos++;
            }
        };

        // console.log(valarr);
        //console.log(validos);
        $('#pro').val(validos);
        event.preventDefault();
    });




});