var APP = APP || {};
APP.Data = (function() {

    //GET DATA AND STORE IN LOCAL DB


    var _datos;
    var _idxJugador = 0; // Primer Jugador
    var _idxReto = 0; // Primer Reto
    var _respuestas = {};







    var loadData = function(callbackOk, callbackNok) {

        _datos = JSON.parse(localStorage.getItem('datos'));

        if (!_datos || _datos == null || _datos.length == 0) {
            $.getJSON("data/show.json", function(data) {
                _datos = data;
                localStorage.setItem('datos', JSON.stringify(data));


                APP.DB.addProgram(data);


            });
        }

        if ($(_datos).length > 0) {
            callbackOk("Load Data " + $(_datos).length);
        } else {
            callbackNok("Load Data " + $(_datos).length);
        }

    }

    var getPlayers = function(callbakcOk, callbackNok) {

        if ($(_datos.players).length > 0) {
            callbakcOk(_datos.players, "getPlayers");
        } else {
            callbackNok("getPlayers");
        }


    }

    var getNextPlayer = function(callbakcOk, callbackNok) {

        console.log("JUGADOR ACTUAL: " + _idxJugador);
        if (_datos.players[_idxJugador] != null) {
            callbakcOk(_datos.players[_idxJugador], "getNexPlayer");
        } else {

            callbackNok("getPlayer");
        }


    }

    var getChallenge = function(callbackOk, callbackNok) {

        var retos = _datos.players[_idxJugador].challenges;
        if ($(retos).length > 0) {

            callbackOk(retos, "getChallenge");

        } else {

            callbackNok("getChallenge");
        }
    }

    var getNextChallenge = function(callbackOk, callbackNok) {

        var reto = _datos.players[_idxJugador].challenges[_idxReto];

        if ($(reto).length > 0) {

            callbackOk(reto, "getNextChallenge");
        } else {
            _idxJugador++; // se han acabado los retos de este jugador, pasamos al siguiente.
            _idxReto = 0;
            callbackNok("getNextChallenge");
        }
    }

    var registraRespuesta = function(opcion, callbackOk, callbackNok) {
        // TO-DO
        _idxReto++;
        guardarRespuestas();
        callbackOk("Registra Respuesta");

    }

    var guardarRespuestas = function() {
        // TO-DO

    }

    return {
        loadData: loadData,
        getPlayers: getPlayers,
        getChallenge: getChallenge,
        getNextPlayer: getNextPlayer,
        getNextChallenge: getNextChallenge,
        registraRespuesta: registraRespuesta,
        guardarRespuestas: guardarRespuestas
    }

})();