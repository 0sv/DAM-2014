var APP = APP || {};
APP.UI = (function() {

    var cargaJugador = function(jugador, callbackOk) {

        var datosJugador = $('#participante');
        datosJugador.children().remove();

        datosJugador.append('<div> NOMBRE: ' + jugador.player.name + '</div>');
        datosJugador.append('<div> EDAD: ' + jugador.player.age + '</div>');
        datosJugador.append('<div> DESCRIPCIÓN: ' + jugador.player.description + '</div>');
        datosJugador.append('<div> <img src="' + jugador.player.photo + '"></div>');

        callbackOk("cargaDatosDeljugador");

    }

    var cargaReto = function(reto, callbackOk) {

        var op1 = $('#opcion1');
        var op2 = $('#opcion2');

        console.log("UI RETO");
        console.log(reto);

        op1.children('div').remove();
        op2.children('div').remove();



        op1.append('<div> OPCION 1 </div>');
        op1.append('<div> <img src="' + reto.option1.photo + '"></div>');
        op1.append('<div> ARTÍCULO: ' + reto.option1.name + '</div>');
        op1.append('<div> DESCRIPCIÓN: ' + reto.option1.description + '</div>');
        op1.append('<div> PRECIO: ' + reto.option1.price + '</div>');
        op1.append('<div> LIKES: ' + reto.option1.likes + '</div>');

        op2.append('<div> OPCION 2 </div>');
        op2.append('<div> <img src="' + reto.option2.photo + '"></div>');
        op2.append('<div> ARTÍCULO: ' + reto.option2.name + '</div>');
        op2.append('<div> DESCRIPCIÓN: ' + reto.option2.description + '</div>');
        op2.append('<div> PRECIO: ' + reto.option2.price + '</div>');
        op2.append('<div> LIKES: ' + reto.option2.likes + '</div>');




        callbackOk("cargaRetos");

    }

    var muestra = function(id, callbackOk) {

        $('#' + id).removeClass('hidden');
        callbackOk("Muestra " + id);

    }

    var oculta = function(id, callbackOk) {

        $('#' + id).addClass('hidden');
        callbackOk("Oculta " + id);
    }

    var limpiaReto = function(callbackOk) {

        var op1 = $('#opcion1');
        var op2 = $('#opcion2');

        console.log("UI RETO");
        console.log(reto);

        op1.children('div').remove();
        op2.children('div').remove();

        callbackOk("LimpiaReto OK");
    }

    var cargamapa = function(data, callbackOk) {



        callbackOk("cargaMapa OK");
    }




    return {
        cargaJugador: cargaJugador,
        muestra: muestra,
        oculta: oculta,
        cargaReto: cargaReto,
        limpiaReto: limpiaReto,
        cargamapa: cargamapa
    }

})();