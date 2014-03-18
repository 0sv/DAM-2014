$(document).ready(function() {


    //var $f = $('form').validador();
    $(document).on('keyup', '[data-validator]', function() {
        $('form').validador();
    });

});