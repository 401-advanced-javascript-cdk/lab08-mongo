## Lab 08 - MongoDB
Implements MongoDB
### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](https://github.com/401-advanced-javascript-cdk/lab05-bitmap-transformer/pull/2)
* [Travis](https://travis-ci.com/401-advanced-javascript-cdk/lab05-bitmap-transformer)

### Modules
#### `app.js`
Contains routes and methods for performing RESTful requests.

#### `src/models/products.js`  `src/models/categories.js`
Defines MongoDB requests for the their collection as methods using RESTful verbs.

#### `src/models/schemas/categories-schema`  `src/models/schemas/products-schema`
Provides the schema for their collection and makes it available for the model.

#### Tests
* `npm test`
Tests are implemented using supergoose to create a MongoDB testing environment in memory.