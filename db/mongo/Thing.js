const mongoose = require('mongoose');

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

module.exports = Thing;
