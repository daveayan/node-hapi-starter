'use strict';

const hapi = require('hapi');

const users = require('../api/user');
const classes = require('../api/class');

const hapi_swagger_config = require('./hapi-swagger-config.js');
const hapi_mrhorse_config = require("./hapi-mrhorse-config.js");
const hapi_server_session_config = require("./hapi-server-session-config.js");

console.log("0 = " + process.argv[0]);
console.log("1 = " + process.argv[1]);
console.log("2 = " + process.argv[2]);
console.log("3 = " + process.argv[3]);
console.log("4 = " + process.argv[4]);
console.log("5 = " + process.argv[5]);
console.log("6 = " + process.argv[6]);
console.log("7 = " + process.argv[7]);

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

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
