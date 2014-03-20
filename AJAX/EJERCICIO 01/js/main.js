$(function() {

    var $recurso = $('#recurso');
    $recurso.val($(location).attr('href'));

    $(document).on('click', 'input', function(e) {
        cargarcontenido(e);
    });

    $tiempo = $.now();

    var _orgAjax = jQuery.ajaxSettings.xhr;
    jQuery.ajaxSettings.xhr = function() {
        var xhr = _orgAjax();
        xhr.onreadystatechange = function() {
            //you can log xhr.readystate here
            // console.log($.now());
            // console.log(xhr.readyState);
            // console.log(xhr);
            cargaestado(xhr.readyState);

        }
        xhr.onload = function() {
            //you can log xhr.readystate here
            // console.log($.now());
            // console.log(xhr.readyState);
            // console.log(xhr);
            cargaestado(xhr.readyState);
        }
        xhr.onprogress = function() {
            //you can log xhr.readystate here
            // console.log($.now());
            // console.log(xhr.readyState);
            // console.log(xhr);
            cargaestado(xhr.readyState);
        }
        xhr.onloadend = function() {
            //you can log xhr.readystate here
            // console.log($.now());
            // console.log(xhr.readyState);
            console.log(xhr);
            cargaestatus(xhr.status, xhr.statusText);
            cargarhead(xhr.getAllResponseHeaders());
        }



        return xhr;
    };


    var cargarcontenido = function() {
        $remoto = $.get($recurso.val(), function(r) {
            cargadatos(r);
        });
    };

    var cargadatos = function(datos) {
        $('#contenidos').append($('<pre/>', {
            'text': datos
        }));
    }

    var cargaestado = function(datos) {
        //console.log(datos);
        $('#estados').append($('<pre/>', {
            'text': (datos + " - " + ($.now() - $tiempo) + " seg")
        }));
    }

    var cargaestatus = function(estado, datos) {
        console.log(datos);
        $('#codigo').append($('<pre/>', {
            'text': (estado + " - " + datos)
        }));
    }

    var cargarhead = function(data) {
        $('#cabeceras').append($('<pre/>', {
            'text': data
        }));
    }

    //beforeSend
    //complete


});