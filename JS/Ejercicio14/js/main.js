(function() {
    "use strict";

    // Numero de enlaces de la pag:

    var enlaces = document.getElementsByTagName("a");
    console.log(enlaces.length);

    var enlaces2 = document.querySelectorAll("a");
    console.log(enlaces2.length);

    console.log(enlaces);
    console.log(enlaces2);


    //Dirección del ultimo enlace


    var enlacePreLast = enlaces[enlaces.length - 2].href;

    console.log(enlacePreLast);


    var enlacesPreLast2 = document.querySelectorAll("p:last-child a:nth-last-child(2)");

    console.log(enlacePreLast);


    //Enlaces a http://prueba

    var link2prueba = [];

    for (var i = 0; i < enlaces.length; i++) {
        console.log(enlaces[i].href);
        if (enlaces[i].href == "http://prueba/") {
            link2prueba.push(enlaces[i]);


        }
    }
    console.log(link2prueba.length);


    var link2prueba = document.querySelectorAll('a[href="http://prueba"]');
    console.log(link2prueba.length);


    //Numeros de enlaces del tercer parrafo;


    var enlacesDelParrafo = document.querySelectorAll('body >p');
    if (enlacesDelParrafo.length > 2)

    {
        var numeroEnlaces = enlacesDelParrafo[2].querySelectorAll('a');
        console.log(numeroEnlaces);
    }





})()