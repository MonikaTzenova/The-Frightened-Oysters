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
    let ordersCache;
    let promise = new Promise((resolve, reject) => {
        fetch()
            .then(orders => {
                ordersCache = orders;
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
                ordersCache.push(order);
                const dataToWrite = helper.encrypt(ordersCache);

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

const fetchByUsername = function(username) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(ordersFilePath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            let orders = helper.decrypt(data);

            let userOrders = [];
            for (var i = 0; i < orders.length; i += 1) {
                let userOrderPriceSum = 0;
                let currentOrder = orders[i];
                let currentOrderUsernameProducts = [];

                for (var j = 0; j < currentOrder.products.length; j += 1) {
                    let currentProduct = currentOrder.products[j];
                    if (currentProduct.ownerUsername === username) {
                        delete currentProduct.id;
                        currentOrderUsernameProducts.push(currentProduct);
                        userOrderPriceSum += currentProduct.price;
                    }
                }

                if (currentOrderUsernameProducts.length > 0) {
                    let userOrder = {
                        id: currentOrder.id,
                        price: userOrderPriceSum,
                        address: currentOrder.address,
                        email: currentOrder.email,
                        name: currentOrder.name,
                        payment: currentOrder.payment,
                        phone: currentOrder.phone,
                        products: currentOrderUsernameProducts
                    };
                    userOrders.push(userOrder);
                }
            }

            userOrders = userOrders.sort((a, b) => a.id < b.id);
            resolve(userOrders);
        });
    });

    return promise;
};

module.exports = {
    create,
    fetchByUsername
};
