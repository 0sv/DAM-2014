$(function() {

    var $search = $('#search');

    var $input = $search.find('.input_text');
    var $label = $search.find('label');

    if ($input.val() == "") {
        $input.val($label.html());
        $input.addClass('hint');
    }

    $input.addClass('hint');



    $label.remove();

    $input.on('blur', function(e) {
        $this = $(this);
        if ($this.val() == "") {
            $this.val($label.html());
            $input.addClass('hint');
        }
    });

    $input.on('focus keypress keyup', function(e) {
        $this = $(this);
        if ($this.val() === $label.html()) {
            $this.val("");
            $input.removeClass('hint');
        }

    });






});