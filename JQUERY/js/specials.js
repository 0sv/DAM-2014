$(function() {

    $(document).on('change', 'select[name=day]', function(e) {
        var $this = $(this);
        var $value = $this.val();


        //     $res = $.getJSON('./data/specials.json', {
        //         day: $value
        //     }, function(json, textStatus, jqXHR) {
        //         console.log(json);
        //         console.log(textStatus);
        //         console.log(jqXHR);

        //     });

        // });

        $res = $.ajax({
            url: 'data/specials.json',
            data: {
                data: $value
            },
            dataType: 'json',
            success: function(json, textStatus, jqXHR) {
                console.log(json);
                console.log(textStatus);
                console.log(jqXHR);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

    });



});