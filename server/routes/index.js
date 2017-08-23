const { login, register } = require('./authentication');

const routes = [
    login,
    register
];

module.exports = routes;
