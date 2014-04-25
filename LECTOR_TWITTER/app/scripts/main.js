require.config({
    paths: {
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        quo: '../bower_components/quojs/quo.debug',
        //quo: 'https://raw.githubusercontent.com/arkaitzgarro/EarthQuakeLungo/master/js/vendor/quo.debug',
        lungo: '../bower_components/lungo/lungo',
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
    },
    shim: {
        'ydn-db': {
            exports: 'ydn'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        quo: {
            exports: '$$'
        },
        lungo: {
            deps: ['quo'],
            exports: 'Lungo'
        }
    }
});

require(['app'], function() {
    'use strict';
    // use app here
});