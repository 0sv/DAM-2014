$(document).ready(function() {

    "use strict";
    document.desingMode = 'on';

    var textoStore = localStorage.getItem('texto');

    if (textoStore.length === 0) {
        console.log("CONTENIDO VACIO -> LOREM IPSUM");
        textoStore = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorum, qui quibusdam fuga ea voluptatum officia ipsa odit tempora blanditiis odio aliquid temporibus sed. Velit, non modi praesentium reprehenderit hic?"
    };


    var texto = $('#texto');

    texto[0].innerHTML = textoStore;




    $(document).on('click', 'input', function(event) {

        var res = document.execCommand(event.currentTarget.dataset.format, false, event.currentTarget.dataset.value);

        localStorage.setItem('texto', texto[0].innerHTML);

    });



});