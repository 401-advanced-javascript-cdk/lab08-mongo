'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {required: true, type: String},
  description: {type: String},
});

module.exports = mongoose.model('categories', categories);