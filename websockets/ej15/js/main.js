$(function() {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.websockets) {
        console.log("Websocket ok");
    } else {
        console.log("Websocket nok");
        return false;
    }



    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.





    var content = $('#content');


    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');



    socket.onopen = function(e) {
        console.log("Welcome - status " + this.readyState);
        $('#status').text("¿Nombre?");
        $('#input').removeAttr('disabled');

    };

    socket.onclose = function(e) {
        console.log("Disconnected - status " + this.readyState);
    };

    socket.onerror = function(e) {
        console.log("Error - status " + this.data);
    };

    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);

        if (data.type == 'color') {
            console.log("Color: " + data.data);
            myColor = data.data;
            $('#status').text(myName).css('color', myColor);
        }
        if (data.type == 'history') {

            for (var i in data.data) {
                console.log(data.data[i]);
                addMessage(data.data[i].author, data.data[i].text, data.data[i].color, new Date(data.data[i].time));
            }
        }
        if (data.type == 'message') {
            console.log(data.data);
            addMessage(data.data.author, data.data.text, data.data.color, new Date(data.data.time));

        }
    };

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' + +(dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }

    $(document).on('keyup', '#input', function(event) {
        event.preventDefault();
        if (event.keyCode == '13') {

            myName = $('#input').val();
            socket.send(myName);
            $('#input').val("");

        }
    });

});