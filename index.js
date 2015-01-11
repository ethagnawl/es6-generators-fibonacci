var System = require('es6-module-loader').System;

System.import('fibonacci').then(function (m) {

    m.run();

});
