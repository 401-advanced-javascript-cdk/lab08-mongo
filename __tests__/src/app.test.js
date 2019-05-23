'use strict';

const Categories = require('../../src/models/categories.js');
const Products = require('../../src/models/products.js');

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

const category = new Categories();
const products = new Products();

describe('Categories Model', () => {
  it('is a constructor', () => {
    expect(category).toBeInstanceOf(Categories)
    expect(Categories.constructor).toBeDefined();
  });
  describe('Method Definitions', () => {
    describe('Post Method', () => {
      it('has a post method', () => {
        expect(category.post).toBeDefined();
      });
      it('can post a new record', () => {
        let query = {name: 'test'};
        return category.post(query)
        .then(results => expect(results).toBeDefined())
        .catch(results => expect(results).toBeUndefined())
      });
    });
    describe('Put Method', () => {
      it('has a put method', () => {
        expect(category.put).toBeDefined();
      });
      it('can perform put on an exsisting record', () => {
        // DO
      });
    })
    describe('Get Method', () => {
      it('has a get method', () => {
        expect(category.get).toBeDefined();
      });
      it('gets all records from the db', () => {
        return category.get()
        .then(results => {console.log(results); expect(results).toBeInstanceOf(Array)})
        .catch(results => expect(results).toBeUndefined());
      });
      it('can get one record when passed an id', () => {
        // DO
      });
    });
    describe('Delete Method', () => {
      it('has a delete method', () => {
        expect(category.delete).toBeDefined();
      });
      it('deletes a record when passed an id', () => {
      });
    });
  });
});

describe('Products Model', () => {
  it('is a constructor', () => {
    expect(products).toBeInstanceOf(Products)
    expect(Products.constructor).toBeDefined();
  });
  describe('Method Definitions', () => {
    describe('Post Method', () => {
      it('has a post method', () => {
        expect(products.post).toBeDefined();
      });
      it('can post a new record', () => {
        let query = {name: 'test', category: 'test'};
        return products.post(query)
        .then(results => expect(results).toBeDefined())
        .catch(results => expect(results).toBeUndefined())
      });
    });
    describe('Put Method', () => {
      it('has a put method', () => {
        expect(products.put).toBeDefined();
      });
      it('can perform put on an exsisting record', () => {
        // DO
      });
    })
    describe('Get Method', () => {
      it('has a get method', () => {
        expect(products.get).toBeDefined();
      });
      it('gets all records from the db', () => {
        return products.get()
        .then(results => {console.log(results); expect(results).toBeInstanceOf(Array)})
        .catch(results => expect(results).toBeUndefined());
      });
      it('can get one record when passed an id', () => {
        // DO
      });
    });
    describe('Delete Method', () => {
      it('has a delete method', () => {
        expect(products.delete).toBeDefined();
      });
      it('deletes a record when passed an id', () => {
        
      });
    });
  });
});
