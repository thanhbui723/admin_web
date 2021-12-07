let mongoose = require('mongoose');

const mongdodb_url = 'mongodb+srv://zoeydevnul:it285624430@cluster0.wcv9a.mongodb.net/dbShop?retryWrites=true&w=majority"';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(mongdodb_url, {useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => {
            console.log('Database connection successfully!');
        })
        .catch(err => {
            console.log('Database connection error!');
        })
    }
}

module.exports = new Database();