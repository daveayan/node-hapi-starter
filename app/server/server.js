'use strict';

const hapi = require('hapi');

const users = require('../api/user');
const classes = require('../api/class');

const hapi_swagger_config = require('./hapi-swagger-config.js');
const hapi_mrhorse_config = require("./hapi-mrhorse-config.js");
const hapi_server_session_config = require("./hapi-server-session-config.js");
const hapi_blipp_config = require("./hapi-blipp-config.js");
const hapi_status_monitor_config = require("./hapi-status-monitor-config.js");

const hapi_tv_config = require('tv');

let port_to_use = process.argv[2] | 3000;

// Create a server with a host and port
const server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: port_to_use
});

server.route(users);
server.route(classes);

server.register(hapi_mrhorse_config);
server.register(hapi_swagger_config);
server.register(hapi_server_session_config);
server.register(hapi_blipp_config);
// server.register(hapi_status_monitor_config);

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
