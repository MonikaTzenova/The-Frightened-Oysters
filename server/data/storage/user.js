const fs = require('fs');
const path = require('path');
const config = require('../../config');
const helper = require('./helper');

const getUserFilePath = () => {
    const appDir = path.dirname(require.main.filename);
    return path.join(appDir, config.fileStorage.users);
};

const userFilePath = getUserFilePath();

const fetch = function() {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(userFilePath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });

    return promise;
};

const create = function(params) {
    let promise = new Promise((resolve, reject) => {
        fetch()
            .then(users => {
                users = helper.decrypt(users);

                let newUserId = 1;
                const lastUser = users[users.length - 1];
                if (lastUser) {
                    newUserId = lastUser.id + 1;
                }
                params.id = newUserId;
                users.push(params);

                const dataToWrite = helper.encrypt(users);
                fs.writeFile(userFilePath, dataToWrite, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve({
                        username: params.username
                    });
                });
            })
            .catch(err => {
                reject(err);
            });
    });

    return promise;
};

module.exports = {
    create,
    fetch
};
