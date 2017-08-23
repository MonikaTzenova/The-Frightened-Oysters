const { authenticationData, orderData } = require('../data');
const helper = require('./helper');

const add = {
    method: 'POST',
    path: '/api/orders',
    handler: function(request, reply) {
        return orderData.create(request.payload)
        .then(orderResult => {
            return reply(orderResult);
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
    add
};
