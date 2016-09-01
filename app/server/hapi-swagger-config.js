'use strict';

const pack = require('../../package');
const hapi_swagger = require('hapi-swagger');
const inert = require('inert');
const vision = require('vision');

const hapi_swagger_config = [
    inert,
    vision,
    {
        register: hapi_swagger,
        options: {
            info: {
                'title': 'hapi node',
                'version': pack.version,
            }
        }
    }
];

module.exports = hapi_swagger_config; 