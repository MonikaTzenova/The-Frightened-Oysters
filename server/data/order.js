const oderStorage = require('./storage/order');

const create = function(params) {
    return oderStorage.create(params);
};

module.exports = {
    create
};
