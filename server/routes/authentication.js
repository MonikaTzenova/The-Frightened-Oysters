const { authenticationData } = require('../data');

const login = {
    method: 'POST',
    path: '/api/auth/login',
    handler: function(request, reply) {
        return authenticationData.login(request.payload)
            .then(response => {
                return reply(response);
            })
            .catch(error => {
                return reply({
                    error: {
                        type: error.type || 'unknown',
                        message: `Error - ${error.message}`
                    }
                });
            });
    }
};

const register = {
    method: 'POST',
    path: '/api/auth/register',
    handler: function(request, reply) {
        return authenticationData.register(request.payload)
            .then(response => {
                return reply(response).state('x-cookie', response.cookie);
            })
            .catch(error => {
                return reply({
                    error: {
                        type: error.type || 'unknown',
                        message: `Error - ${error.message}`
                    }
                });
            });
    }
};

module.exports = {
    login,
    register
};
