'use strict';

const schema = require('./schemas/categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    let query = _id ? {_id} : {};
    try { return schema.find(query); }
    catch(e) { console.log(e) }
  }
  
  post(record) {
    let query = new schema(record);
    try { return query.save(); }
    catch(e) { console.log(e) }
  }

  put (_id, record) {
    let query = {...record};
    try { return schema.findOneAndUpdate({_id}, query, {new: true}); }
    catch(e) { console.log(e) }
  }

  delete(_id) {
    let query = {_id};
    return schema.remove(query);
  }

}

module.exports = Categories;