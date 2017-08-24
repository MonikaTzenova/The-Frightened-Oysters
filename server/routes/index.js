const { login, register } = require('./authentication');
const profile = require('./profile');
const product = require('./products');
const order = require('./order');

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
    product.delete,

    // Orders
    order.add,
    order.fetch,
    order.get
];

module.exports = routes;
