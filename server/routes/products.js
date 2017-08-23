const { authenticationData, productData } = require('../data');
const helper = require('./helper');

const defaultPageSize = 20;

const fetch = {
    method: 'GET',
    path: '/api/products',
    handler: function(request, reply) {
        return productData.fetch()
            .then(products => {
                // TODO: implement query page logic
                let lengthToLoop = defaultPageSize > products.length ? products.length : defaultPageSize;
                let startIndex = 0;
                let queryPage = parseInt(request.query.page);
                if (queryPage) {
                    startIndex = queryPage - 1;
                }
                let productsToReturn = [];
                for (var i = startIndex * lengthToLoop; i < (startIndex + 1) * lengthToLoop; i += 1) {
                    if (products[i]) {
                        productsToReturn.push(products[i]);
                    }
                }
                return reply(productsToReturn);
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

const get = {
    method: 'GET',
    path: '/api/products/{id}',
    handler: function(request, reply) {
        return productData.getById(parseInt(request.params.id))
            .then(product => {
                return reply(product);
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

const add = {
    method: 'POST',
    path: '/api/products',
    handler: function(request, reply) {
        const cookie = helper.getCookie(request.headers);
        return authenticationData.validateSession(cookie)
        .then(sessionObj => {
            var productToAdd = Object.assign(request.payload, {ownerUsername: sessionObj.username});
            return productData.create(productToAdd);
        })
        .then(productInfo => {
            return reply(productInfo);
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

const edit = {
    method: 'PUT',
    path: '/api/products/{id}',
    handler: function(request, reply) {
        const cookie = helper.getCookie(request.headers);
        return authenticationData.validateSession(cookie)
            .then(sessionObj => {
                return productData.edit(parseInt(request.params.id), sessionObj, request.payload);
            })
            .then(productInfo => {
                return reply(productInfo);
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

const deleteProduct = {
    method: 'DELETE',
    path: '/api/products/{id}',
    handler: function(request, reply) {
        const cookie = helper.getCookie(request.headers);
        return authenticationData.validateSession(cookie)
            .then(sessionObj => {
                return productData.delete(parseInt(request.params.id), sessionObj);
            })
            .then(deleteResult => {
                return reply(deleteResult);
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
    fetch,
    add,
    get,
    edit,
    delete: deleteProduct
};
