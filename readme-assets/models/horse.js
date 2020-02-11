'use strict'
const mongoose = require('mongoose');


const horseSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number
});


module.exports = mongoose.model('Horse', horseSchema);