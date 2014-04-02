$(document).ready(function() {

    var video = document.getElementById('video');

    var seekbar = document.getElementById('progress');

    function setupSeekbar() {
        seekbar.min = video.startTime;
        seekbar.max = video.duration;
    }
    video.ondurationchange = setupSeekbar;

    function seekVideo() {
        video.currentTime = seekbar.value;
    }

    function updateUI() {
        seekbar.value = video.currentTime;
    }
    seekbar.onchange = seekVideo;
    video.ontimeupdate = updateUI;


    $(document).on('click', '[type = "button"]', function(event) {
        event.preventDefault();
        /* Act on the event */


        if (this.dataset.action == "play") {
            video.play();
            var vsarray = $(video).find('source');
            console.log($(vsarray[0]).attr('src'));
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "pause") {
            video.pause();
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "stop") {
            video.pause();
            video.currentTime = 0;
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "ff") {
            video.currentTime += 10;
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "bw") {
            video.currentTime -= 10;
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "init") {
            video.currentTime = 0;
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "end") {
            video.currentTime = video.duration;
            $(this).addClass('btngreen');
            $(this).siblings().removeClass('btngreen');
        }
        if (this.dataset.action == "fullscreen") {

            if (video.requestFullScreen) {
                video.requestFullScreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullScreen) {
                video.webkitRequestFullScreen();
            }


        };


    });

    $(document).on('change', '[type = "range"]', function(event) {
        event.preventDefault();

        var v = $('#volumen');
        //  console.log(v[0].value);
        if (this.dataset.action == "volume") video.volume = (v[0].value / 100);
    });


    $(document).on('input', '[type = "list"]', function(event) {
        event.preventDefault();
        console.log(this.value);

        if (this.value === "lego") {

            $(video).attr('poster', 'poster.jpg');
            var vsarray = $(video).find('source');
            $(vsarray[0]).attr('src', 'lego.mp4');
            $(vsarray[0]).attr('type', 'video/mp4');
            $(vsarray[0]).attr('codecs', 'avc1.42E01E, mp4a.40.2');
            $(vsarray[1]).attr('src', 'lego.webm');
            $(vsarray[1]).attr('type', 'video/webm');
            $(vsarray[1]).attr('codecs', 'vp8, vorbis');


        }

        if (this.value === "cats") {
            $(video).attr('poster', 'cats.jpg');
            var vsarray = $(video).find('source');
            $(vsarray[0]).attr('src', 'cat.mp4');
            $(vsarray[0]).attr('type', 'video/mp4');
            $(vsarray[0]).attr('codecs', 'avc1.42E01E, mp4a.40.2');
            $(vsarray[1]).attr('src', 'cat.webm');
            $(vsarray[1]).attr('type', 'video/webm');
            $(vsarray[1]).attr('codecs', 'vp8, vorbis');


        }

        video.load();

        setupSeekbar();

    });

});