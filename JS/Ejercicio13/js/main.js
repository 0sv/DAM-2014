var test = (function() {
    "use strict"

    window.$ = Element.prototype.$ = function(selector) {
        var that = (this instanceof Element) ? this : document;
        var elems = that.querySelectorAll(selector);
        return (elems.length === 1) ? elems[0] : elems;
    };


    //function test() {

    var fecha = /(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/(\d{4})/;

    console.log(fecha.test("Naci el 05/04/1982 en Donostia."));
    console.log(fecha.test("Naci el 99/04/1982 en Donostia."));
    console.log(fecha.test("Naci el 32/04/1982 en Donostia."));
    console.log(fecha.test("Naci el 21/44/1982 en Donostia."));

    console.log("Nací el 05/04/1982 en Donostia.".match(fecha));

    var mail = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/

    console.log(mail.test("mimail@dominio.com"));








})();