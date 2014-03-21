$(function() {




    var listap =
        $.ajax({
            dataType: "json",
            url: "servidor/cargaProvinciasJSON.php",
            success: function(json, textStatus) {

                var $el = $("#prov");
                $el.empty();
                $.each(json, function(key, value) {
                    $el.append($("<option/>")
                        .attr("value", key).text(value));
                });
            }
        });


    var listam = function(e) {
        $.ajax({
            dataType: "json",
            type: 'POST',
            url: "servidor/cargaMunicipiosJSON.php",
            data: {
                provincia: "" //($('#prov').val())
            },
            success: function(json, textStatus) {
                console.log($.now() + $('#prov').find('option:selected').val());
                var $el = $('#mun');
                $el.empty();
                $.each(json, function(key, value) {
                    $el.append($("<option/>")
                        .attr("value", key).text(value));
                });
            }
        });
    };




    $(document).on('change', '#prov', function(e) {
        listam();
    });
});