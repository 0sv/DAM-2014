var APP = APP || {};
APP.GPS = (function() {

    var errorHandler = function(err) {
        if (err.code == 1) {
            console.log("Error: Access is denied!");
        } else if (err.code == 2) {
            console.log("Error: Position is unavailable!");
        }
    };

    var localizateWithGPS = function(lat, lon) {
        if (navigator.geolocation) {
            // timeout at 60000 milliseconds (60 seconds)
            var options = {
                enableHighAccuracy: true,
                timeout: 600000000,
                maximumAge: 0,


            };

            navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    var accu = position.coords.accuracy;
                    var alt = position.coords.altitude;
                    var altacc = position.coords.altitudeAccuracy;
                    var heading = position.coords.heading;
                    var speed = position.coords.speed;
                    var GPS = {
                        'lat': latitude,
                        'lng': longitude
                    };
                    console.log("ENVIANDO LOS PINS " + lat + ":" + lon);
                    showMap(position, lat, lon);
                },
                errorHandler,
                options);

        }

    };






    function showMap(position, lat, lon) {

        if ($('#mapcanvas').length > 0) {
            console.log("EXISTE");

        } else {
            console.log("NO EXISTE");
            var mapcanvas = document.createElement('div');
            mapcanvas.id = 'mapcanvas';
            mapcanvas.style.width = '211px';
            mapcanvas.style.height = '283px';

            $('#mapa').append(mapcanvas);
        }


        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        console.log("ACTUALIZANDO PINS " + lat + ":" + lon);
        var latlngpin = new google.maps.LatLng(lat, lon);
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
        var marker2 = new google.maps.Marker({
            position: latlngpin,
            map: map,
            title: "¡El evento es aquí!"
        });

    }

    return {
        localizateWithGPS: localizateWithGPS
    }

})();