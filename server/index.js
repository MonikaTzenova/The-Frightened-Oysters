'use strict';

const Hapi = require('hapi');
const routes = require('./routes');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 9090
});

// Register routes
routes.forEach(route => {
    server.route(route);
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
