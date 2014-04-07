var APP = APP || {};

$(document).ready(function() {

    document.desingMode = 'on';

    var resultados = $('#resultados');
    APP.DBMODULE.init();

    var updatetable = function(data) {

        $('#resultados').append('<tr><td id="idrow">' + data.timeStamp + '</td><td id="datarow" contenteditable ="true">' + data.text + '</td></tr>');

    }



    $(document).on('click', '#tareanuevaadd', function(event) {
        event.preventDefault();

        var txt = $('#tareanueva').val();
        console.log("AÑADIR: " + txt);
        APP.DBMODULE.add(txt, updatetable);


    });

    var updateMe = function(event) {
        // event.preventDefault();
        $('#resultados tr').remove();
        var txt = $('#tareanueva').val();

        APP.DBMODULE.getAllTodoItems(updatetable);


    };

    $(document).on('click', '#refrescar', updateMe);

    $(document).on('click', '#borrar', function(event) {
        event.preventDefault();

        if ($('.current').length === 1) {

            var id = $('.current').find('td');

            $('.current').removeClass('current');

            console.log(id.first().text());

            APP.DBMODULE.erase(parseInt(id.first().text()), updateMe);

        } else {
            console.log("SELECCIONA UN ELEMENTO");
        }


    });






    $(document).on('click', '#idrow', function(event) {
        event.preventDefault();

        $(this).closest('tr').addClass('current').siblings().removeClass('current');


    });

    $(document).on('click', '#datarow', function(event) {
        event.preventDefault();

        $(this).closest('tr').addClass('current').siblings().removeClass('current');


    });



    $(document).on('blur', '#datarow', function(event) {

        //var res = document.execCommand(event.currentTarget.dataset.format, false, event.currentTarget.dataset.value);

        console.log($(this).siblings().text() + " " + this.innerHTML);

        var id = parseInt($(this).siblings().text());
        var txt = this.innerHTML;
        APP.DBMODULE.update(id, txt, updateMe);

    });



});