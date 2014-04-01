$(document).ready(function() {





    $(document).on('blur', 'input', function(event) {

        var valarr = [];
        var validos = 0;


        var inputs = $('#form').find('input');

        console.log(event);

        for (var i = inputs.length - 1; i >= 0; i--) {

            if (inputs[i].validity.valid && $(inputs[i]).val().length > 0) {

                valarr[i] = 1;

            } else {
                valarr[i] = 0;
            }

        };

        for (var i = valarr.length - 1; i >= 0; i--) {
            if (valarr[i] == 1) {
                validos++;
            }
        };

        console.log(valarr);
        console.log(validos);
        $('#pro').val(validos);
        event.preventDefault();
    });




});