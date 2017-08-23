const userStorage = require('./storage/user');
const sessionStorage = require('./storage/session');
const helper = require('./storage/helper');

const register = function(params) {
    const promise = new Promise(function(resolve, reject) {
        return userStorage.create(params)
            .then(createdUser => {
                return sessionStorage.create(createdUser.username);
            })
            .then(createdSession => {
                resolve({
                    username: createdSession.username,
                    cookie: createdSession.session,
                    cookieExpirationTime: createdSession.expireTime
                });
            })
            .catch(err => {
                reject(err);
            });
    });

    return promise;
};

const login = function(params) {
    const promise = new Promise((resolve, reject) => {
        return userStorage.fetch()
            .then(users => {
                users = helper.decrypt(users);
                const userToLogin = users.find(user => user.username === params.username && user.password === params.password);
                if (userToLogin) {
                    return sessionStorage.create(params.username);
                } else {
                    reject(new Error({type: 'auth.invalidCredentials', message: 'Invalid credentials'}));
                }
            })
            .then(createdSession => {
                resolve({
                    username: createdSession.username,
                    cookie: createdSession.session,
                    cookieExpirationTime: createdSession.expireTime
                });
            })
            .catch(err => {
                reject(err);
            });
    });

    return promise;
};

module.exports = {
    register,
    login
};
