var APP = APP || {};
APP.Events = (function() {

    $(document).on('click', '#start', function(event) {
        event.preventDefault();
        APP.Main.init(); // cargar el primer jugador y sus retos.
    });

    $(document).on('click', '#nextChanllenge, #nextPlayer', function(event) {
        event.preventDefault();
        APP.Main.nextChallenge(); // cargar el reto.
    });

    $(document).on('click', '#vota1', function(event) {
        event.preventDefault();
        APP.Main.opcion(1); // votar por el primero.
    });

    $(document).on('click', '#vota2', function(event) {
        event.preventDefault();
        APP.Main.opcion(2); // votar por el segundo.
    });


})();