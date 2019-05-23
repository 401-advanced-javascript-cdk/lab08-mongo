'use strict';

const Categories = require('../../src/models/categories.js');

const request = require('supertest');
const express = require('express');
const {server} = require('../../src/app.js');
const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

const category = new Categories();

describe('Categories Model', () => {
  describe('Method Definitions', () => {
    it('is a constructor', () => {
      expect(category).toBeInstanceOf(Categories)
      expect(Categories.constructor).toBeDefined();
    });
    it('has a post method', () => {
      expect(category.post).toBeDefined();
    });
    it('has a delete method', () => {
      expect(category.delete).toBeDefined();
    });
    describe('Post Method', () => {
      it('has a put method', () => {
        expect(category.put).toBeDefined();
      });
      it('can post a new record', () => {
        let query = {name: 'test', category: 'test'};
        return category.post(query)
        .then(results => expect(results).toBeDefined())
        .catch(results => expect(results).toBeUndefined())
      });
    });
    describe('Get Method', () => {
      it('has a get method', () => {
        expect(category.get).toBeDefined();
      });
      it('gets all records from the db', () => {
        return category.get()
        .then(results => {console.log(results); expect(results).toBeInstanceOf(Array)})
        .catch(results => expect(results).toBeUndefined())
      })
  });
  });
});
