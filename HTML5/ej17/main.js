$(function() {

    var calcula = function() {



        worker.postMessage({
            'cmd': 'calcula',
            'msg': $('#numero').val(),
            'marca': $('#marca').val()
        });
    }

    $(document).on('click', '#calcula', calcula);

    var worker = new Worker('doWork.js');
    worker.addEventListener('message', function(e) {
        document.getElementById('result').textContent = e.data;
    }, false);

});