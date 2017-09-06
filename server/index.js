'use strict';

const Hapi = require('hapi');
const routes = require('./routes');
const data = require('./data');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 9090
});

// Register routes
routes.forEach(route => {
    let routeWithCors = Object.assign(
        route,
        {   
            config: {
                cors: {
                    origin: ['*'],
                    additionalHeaders: ['cache-control', 'x-requested-with']
                }
            }
        }
    );
    server.route(route);
});

data.start();

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
