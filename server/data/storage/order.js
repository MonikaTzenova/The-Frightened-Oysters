const fs = require('fs');
const path = require('path');
const config = require('../../config');
const helper = require('./helper');
const productStorage = require('./product');

const getOrdersFilePath = () => {
    const appDir = path.dirname(require.main.filename);
    return path.join(appDir, config.fileStorage.orders);
};

const ordersFilePath = getOrdersFilePath();

const fetch = function() {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(ordersFilePath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            let orders = helper.decrypt(data);
            orders = orders.sort((a, b) => a.id < b.id);
            resolve(orders);
        });
    });

    return promise;
};

const create = function(order) {
    let promise = new Promise((resolve, reject) => {
        fetch()
            .then(orders => {
                let newOrderId = 1;
                const lastAddedOrder = orders[0];
                if (lastAddedOrder) {
                    newOrderId = lastAddedOrder.id + 1;
                }
                order.id = newOrderId;

                return productStorage.fetch();
            })
            .then(products => {
                let orderProducts = products.filter(p => order.productIds.indexOf(p.id) >= 0);

                delete order.productIds;
                order.products = orderProducts;
                const dataToWrite = helper.encrypt(order);

                fs.writeFileSync(ordersFilePath, dataToWrite);
                let productIdsToBeDeleted = orderProducts.map(p => p.id);
                return productStorage.deleteProductsByIds(productIdsToBeDeleted);
            })
            .then(deleteProductsResult => {
                resolve(deleteProductsResult);
            })
            .catch(err => {
                reject(err);
            });
    });

    return promise;
};

module.exports = {
    create
};
