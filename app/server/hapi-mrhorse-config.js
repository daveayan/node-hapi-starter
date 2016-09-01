'use strict';

const hapi_mrhorse_config = {
    register: require('mrhorse'),
    options: {
        policyDirectory: __dirname + '/../filters/'
    }
};

module.exports = hapi_mrhorse_config; 