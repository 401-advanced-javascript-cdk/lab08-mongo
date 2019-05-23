'use strict';

const uuid = require('uuid/v4');

const schema = require('./schemas/products-schema.js');

class Products {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let query = _id ? {_id} : {};
    try { return schema.find(query, {__v: 0}); }
    catch(e) { console.log(e) }
  }
  
  post(record) {
    let query = new schema(record);
    try { return query.save(); }
    catch(e) { console.log(e) }
  }

  put(_id, record) {
    let query = {...record};
    try { return schema.findOneAndUpdate({_id}, query, {new: true, projection:{__v: 0}}); }
    catch(e) { console.log(e) }
  }

  delete(_id) {
    let query = {_id};
    return schema.remove(query);
  }

  sanitize(entry) {
  }

}

module.exports = Products;