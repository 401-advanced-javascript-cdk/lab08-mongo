'use strict';

const Categories = require('../../src/models/categories.js');

describe('Categories Model', () => {
  it('is a constructor', () => {
    expect(new Categories).toBeInstanceOf(Categories)
    expect(Categories.constructor).toBeDefined();
  })
})