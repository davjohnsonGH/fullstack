const mongoose = require('mongoose');

const route     = {};
route.protocol  = 'mongodb';
route.host      = 'localhost';
route.port      = '27017';
route.dbName    = 'anything';

const connect = () => {
   return mongoose.connect(route.protocol + '://' + route.host + ':' + route.port + '/' + route.dbName);
}

const thing = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        default: false
    }
}, {timestamps: true}) 

const Thing = mongoose.model('thing', thing);

connect()
    .then(async connection => {
        const thing = await Thing.create({
            title: 'thing one',
            value: 'thing-1'
        })
        console.log(thing);
    })
    .catch(e => console.error(e))
