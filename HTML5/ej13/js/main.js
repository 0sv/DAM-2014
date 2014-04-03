$(document).ready(function() {
    // Calcular posición


    var errorHandler = function(err) {
        if (err.code == 1) {
            console.log("Error: Access is denied!");
        } else if (err.code == 2) {
            console.log("Error: Position is unavailable!");
        }
    };

    var localizateWithGPS = function() {
        if (navigator.geolocation) {
            // timeout at 60000 milliseconds (60 seconds)
            var options = {
                enableHighAccuracy: true,
                timeout: 600000000,
                maximumAge: 0

            };

            navigator.geolocation.watchPosition(function(position) {
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
                    console.log(GPS);
                    console.log("Accuracy: " + accu);

                    $('#datos').append('<spam> Posicion: ' + latitude + ' : ' + longitude + ' Precisión: ' + accu + ' m ' + ' Altitud: ' + alt + ' Precisión altitud: ' + altacc + ' Heading: ' + heading + " Velocidad: " + speed + '</spam>');

                    showMap(position);
                },
                errorHandler,
                options);

        }
        //getLocation(radio, success);

        // localizate(radio, navigator.getcurrentposition, success);
    };






    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 18,
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
    }

    localizateWithGPS();

});