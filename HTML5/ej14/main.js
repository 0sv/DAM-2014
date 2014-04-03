$(document).ready(function() {



    function handleStorage(event) {
        event = event || window.event; // support IE8
        if (event.newValue === null) { // it was removed
            console.log("newValue === null");
            // console.log(event);

        } else {
            // Do somthing else
            console.log(event);

            $('#textoss').val(sessionStorage.getItem('textoss'));
            // $('#textols').val(localStorage.getItem('textols'));
        }
    }

    window.addEventListener('storage', handleStorage, false);

    // window.attachEvent('onstorage', handleStorage);


    $(document).on('click', '#new', function(event) {
        // event.preventDefault();
        window.open(document.URL);
    });

    $(document).on('keyup', '#textoss', function(event) {
        // event.preventDefault();
        sessionStorage.setItem('textoss', $(this).val());
    });

    $(document).on('keyup', '#textols', function(event) {
        // event.preventDefault();
        localStorage.setItem('textols', $(this).val());
    });

    $(document).on('ready', '', function(event) {
        // event.preventDefault();

        $('#textoss').val(sessionStorage.getItem('textoss'));
        $('#textols').val(localStorage.getItem('textols'));


    });


});