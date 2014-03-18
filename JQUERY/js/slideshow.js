$(function() {

    $ul = $('#slideshow');

    $div = $('<div/>');

    $btnPrev = $('<input/>', {
        'type': 'button',
        'value': 'Prev'
    });

    $btnNext = $('<input/>', {
        'type': 'button',
        'value': 'Next'
    });

    $btnPrev.addClass('btnPrev boton');
    $btnNext.addClass('btnNext boton');

    $div.append($btnPrev);
    $div.append($btnNext);
    $div.insertAfter($ul);


    $(document).on('click', '.btnPrev', function(e) {
        $slider.goToPrevSlide();
        $btnPrev.hide();
    })

    $(document).on('click', '.btnNext', function(e) {
        $slider.goToNextSlide();
        $btnNext.hide();
    })

    $slider = $ul.bxSlider({
        mode: 'fade',
        controls: false,
        pager: false,
        autoStart: false,
        onSlideAfter: function(e) {
            $btnNext.show();
            $btnPrev.show();
        }
    });









});