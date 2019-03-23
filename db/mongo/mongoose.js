const mongoose = require('mongoose');

const route     = {};
route.protocol  = 'mongodb://';
route.host      = 'localhost';
route.port      = ':27017/';
route.dbName    = 'anything';

const connect = () => {
   return mongoose.connect(route.protocol + route.host + route.port + route.dbName);
}

const thing = new mongoose.Schema({
    title: String,
    id: Number,
    value: String,
    active: Boolean
}) 

const Thing = mongoose.model('thing', thing);

console.log(Thing);
