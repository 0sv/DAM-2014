var APP = APP || {};
APP.Main = (function() {

    var _jugadores;
    var _retos;

    // METODOS PRIVADOS

    var ok = function(msg) {
        console.log("OK " + msg);
    }

    var nok = function(msg) {
        console.log("NOK " + msg);
    }

    var okChallenger = function(retos, msg) {
        // ok(msg);
        _retos = retos;
        console.log("RETOS LOCALIZACION");
        console.log(_retos.place);
        APP.GPS.localizateWithGPS(_retos.place.latitude, _retos.place.longitude);
        APP.UI.cargamapa(_retos.place, ok);
        APP.UI.cargaReto(_retos, ok);
        APP.UI.oculta("nextChanllenge", ok);
        APP.UI.oculta("nextPlayer", ok);
        APP.UI.muestra("vota1", ok);
        APP.UI.muestra("vota2", ok);
        APP.UI.muestra("mapa", ok);


    }

    var nokChallenger = function(msg) {
        // ok(msg);
        console.log("NOK " + msg);
        console.log("SIGUIENTE PLAYER");
        APP.Data.getNextPlayer(okPlayer, nokPlayer);
        APP.UI.muestra("nextPlayer", ok);
        APP.UI.oculta("nextChanllenge", ok);



    }

    var okPlayer = function(jugadores, msg) {
        // ok(msg);
        _jugadores = jugadores;
        console.log(_jugadores);
        //  console.log(_jugadores);
        APP.UI.cargaJugador(_jugadores, ok);
        APP.UI.muestra("nextChanllenge", ok);

    }

    var nokPlayer = function(jugadores, msg) {

        console.log("FINALIZADO");
        APP.UI.oculta("nextPlayer", ok);


    }

    var okData = function(msg) {
        ok(msg);
        APP.Data.getPlayers(okPlayer, nok);
    }

    //// METODOS PUBLICOS

    var init = function() {
        APP.Data.getNextPlayer(okPlayer, nok); // cargar el primer jugador y sus retos.
        APP.UI.oculta("start", ok);

    }

    var nextChallenge = function() {
        APP.Data.getNextChallenge(okChallenger, nokChallenger);

        // APP.UI.oculta("nextChanllenge", ok);
    }

    var opcion = function(data) {

        APP.UI.oculta("vota1", ok);
        APP.UI.oculta("vota2", ok);
        APP.UI.muestra("nextChanllenge", ok);
        APP.UI.limpiaReto(ok);
        APP.Data.registraRespuesta(data, ok, nok);
        APP.UI.oculta("mapa", ok);
    }


    APP.Data.loadData(ok, nok); // Cargar datos.

    return {
        init: init,
        nextChallenge: nextChallenge,
        opcion: opcion

    }


})();