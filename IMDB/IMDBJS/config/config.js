const path = require('path');

module.exports = {
    development: {
        rootFolder: path.normalize(path.join(__dirname, '/../')),
        "username": "root",
        "password": null,
        "database": "imdb_js",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    production:{}
};
