'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {required: true, type: String},
  description: {type: String},
  category: {required: true, type: String}
});

module.exports = mongoose.model('products', products);