var muestra = (function() {
    "use strict"





    var muestra = function() {

        var enlaces = document.querySelectorAll('.enlace');
        if (enlaces.length > 0) {
            enlaces[0].classList.add('oculto');

            var parrafo = enlaces[0].previousElementSibiling;

            var spans = parrafo.querySelectorAll('span.oculto');

            if (spans.length > 0) {
                spans[0].classList.remove('oculto');
            }
        }
    };




    return muestra;

})();