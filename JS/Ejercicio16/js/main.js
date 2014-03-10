var APP = {};



var anade = (function() {
    "use strict"

    window.$ = Element.prototype.$ = function(selector) {
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);
        return (elems.length === 1) ? elems[0] : elems;
    };

    var lista = $('#lista');
    (isNaN(APP.nodek)) ? APP.nodek = 0 : APP.nodek;


    function anade() {




        // console.log(lista);
        var item = document.createElement("li");
        var texto = document.createTextNode("NODO #" + APP.nodek);
        item.appendChild(texto);
        lista.appendChild(item);
        APP.nodek++;

    }


    return anade;

})();