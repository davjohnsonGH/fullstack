const express = require('express');
const app = express();
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('../../db/mongo/Thing');
const cors = require('cors');

const route     = {};
route.protocol  = 'mongodb';
route.host      = 'localhost';
route.port      = '27017';
route.dbName    = 'anything';


app.use(morgan('dev'));
app.use(urlencoded( {extended: true} ));
app.use(json());
app.use(cors());

// get all things
app.get('/thing', async (req, res) => {
    const things = await Thing.find( {} )
    // straight json | mongoose object
    .lean()
    .exec();
    res.status(200).json(things);
    // res.send(things);
})
// create a thing
app.post('/thing', async (req, res) => {
    const thingToBeCreated = req.body;
    const thing = await Thing.create( thingToBeCreated );
    res.status(201).json(thing.toJSON()) 

})

// connect to mongo db
const connect = () => {
    return mongoose.connect(route.protocol + '://' + route.host + ':' + route.port + '/' + route.dbName);
 }
 connect()
     .then(async connection => {
         // spin up express for endpoints 
         app.listen(5000);
     })
     .catch(e => console.error(e))
