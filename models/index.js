const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.set('debug' , true);
const URL = process.env.MONGO_URI;
mongoose.connect(URL , { useNewUrlParser: true  , useUnifiedTopology: true });
mongoose.Promise = Promise;

module.exports.demo = require('./demo');