(function($) {
    $.fn.stripe = function(color, line) {
        var c = color || '#ccc';
        var l = line || 'odd'
        return this.filter('table').each(function() {
            var $this = $(this);
            $this.find('tbody tr:' + l).css('background-color', c);
        });

    };

})(jQuery);