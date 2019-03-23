import mongoose from 'mongoose';

const route     = {};
route.protocol  = 'mongodb://';
route.host      = 'localhost';
route.port      = ':27017/';
route.dbName    = 'anything';
const connect = () => {
   return mongoose.connect(route.protocol + route.host + route.port + route.dbName);
}