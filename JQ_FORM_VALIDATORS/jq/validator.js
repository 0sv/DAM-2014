var APP = APP || {};
APP.validador = function() {
    "use strict";

    var a = function(a) {
        return void 0 !== a && null !== a && a.length > 0 && !/^([^A-Za-z]+)(\s?)(1)$/.test(a) //!/^\s+/.test(a)
    }, b = function(a) {
            var b = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;
            return b.test(a)
        }, c = function(a) {
            var b = /[a-z]/,
                c = /[A-Z]/,
                d = /[0-9]/;
            return b.test(a) && c.test(a) && d.test(a) && a.length > 5 && this.required(a)
        }, d = function(a, b) {
            return a.length < b
        };
    return {
        required: a,
        email: b,
        password: c,
        min: d
    }
}();





(function($) {
    $.fn.validador = function() {
        return this.filter('form').each(function() {
            var $this = $(this);


            var $required = $this.find('[data-validator]');


            $required.each(function() {
                var f = $(this).data('validator');
                console.log("VALOR: " + this.value.length);
                switch (f) {
                    case 'required':
                        if (!APP.validador.required(this.value) && !this.value.length == 0) {
                            $e = $(this);
                            $e.addClass('red-bg');

                        } else {
                            $e = $(this);
                            $e.removeClass('red-bg');
                        }
                        break;
                    case 'email':
                        if (!APP.validador.email(this.value) && !this.value.length == 0) {
                            $e = $(this);
                            $e.addClass('red-bg');
                        } else {
                            $e = $(this);
                            $e.removeClass('red-bg');
                        }
                        break;
                    case 'password':
                        if (!APP.validador.password(this.value) && !this.value.length == 0) {
                            $e = $(this);
                            $e.addClass('red-bg');
                        } else {
                            $e = $(this);
                            $e.removeClass('red-bg');
                        }
                        break;
                    case 'min':
                        if (APP.validador.min(this.value, $(this).data('length'))) {
                            $e = $(this);
                            $e.removeClass('red-bg');
                        } else {
                            $e = $(this);
                            $e.addClass('red-bg');
                        }
                        break;


                }
            });




        });

    }





})(jQuery);