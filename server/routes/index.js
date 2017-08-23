const { login, register } = require('./authentication');
const profile = require('./profile');
const product = require('./products');

const routes = [
    // Authentication routes
    login,
    register,

    // Profile routes
    profile.get,
    profile.edit,

    // Products
    product.fetch,
    product.add,
    product.get,
    product.edit,
    product.delete
];

module.exports = routes;
