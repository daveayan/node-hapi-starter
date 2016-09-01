'use strict';

const hapi_server_session_config = {
    register: require('hapi-server-session'),
    options: {
        cookie: {
            isSecure: false,
        }
    }
};

module.exports = hapi_server_session_config; 