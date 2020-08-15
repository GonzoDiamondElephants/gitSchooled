<<<<<<< HEAD:lib/routs/potions.js
// 'use strict';

// const express = require('express');
// const router = express.Router();
// const schema = require('../../models/potions-schema.js');

// const Model = require('../../models/model.js');

// const potionModel = new Model(schema);

// /**
//  * This route gives us all the potions
//  * @route GET /potions
//  * @returns {object} 201 - A list of all potions that are saved to our collection
//  */
// router.get('/', async (req, res, next) => {
//   console.log('Read all potions ');
//   let result = await potionModel.read(req.body);
//   res.status(201);
//   res.send(result);
// });

// /**
//  * This route gives us a specifc potion
//  * @route GET /potions/:id
//  * @returns {object} 201 - A specific potion fetched by id
//  */
// router.get(':id', async (req, res, next) => {
//   let result = await potionModel.readById(req.params.id);

//   res.status(201);
//   res.send(result);
// });

// /**
//  * This route creates a new potion
//  * @route POST /potions
//  * @returns {object} 201 - A JSON object with the contents of our new potions
//  */
// router.post('/', async (req, res, next) => {
//   // let parsedResult = req.body;
//   console.log('post method');
//   let result = await potionModel.create(req.body);
//   console.log('Create new potion ', result);
//   res.status(201);
//   res.send(result);
// });

// /**
//  * This route updates an existing potion by ID
//  * @route PUT /potions/:id
//  * @returns {object} 201 - A JSON object with the contents of our updated potion
//  */
// router.put('/:id', async (req, res, next) => {
//   let updateThis = await potionModel.update(req.params.id, req.body);
//   res.status(200);
//   res.send(updateThis);
// });

// /**
//  * This route deletes an existing potion by ID
//  * @route DELETE /potions/:id
//  * @returns {string} 201 - A string that says, 'I have deleted one thing'
//  */
// router.delete('/:id', async (req, res, next) => {
//   await potionModel.delete(req.params.id);
//   res.status(200);
//   res.send('I have deleted one thing (probably...we hope)');
// });

// module.exports = router;
=======
'use strict';
const express = require('express');
const router = express.Router();
const schema = require('../../models/potions-schema.js');
const Model = require('../../models/model.js');
const potionModel = new Model(schema);
/**
 * This route gives us all the potions
 * @route GET /potions
 * @returns {object} 201 - A list of all potions that are saved to our collection
 */
router.get('/', async (req, res, next) => {
  console.log('Read all potions ');
  let result = await potionModel.read(req.body);
  res.status(201);
  res.send(result);
});
/**
 * This route gives us a specifc potion
 * @route GET /potions/:id
 * @returns {object} 201 - A specific potion fetched by id
 */
router.get(':id', async (req, res, next) => {
  let result = await potionModel.readById(req.params.id);
  res.status(201);
  res.send(result);
});
/**
 * This route creates a new potion
 * @route POST /potions
 * @returns {object} 201 - A JSON object with the contents of our new potions
 */
router.post('/', async (req, res, next) => {
  // let parsedResult = req.body;
  console.log('post method');
  let result = await potionModel.create(req.body);
  console.log('Create new potion ', result);
  res.status(201);
  res.send(result);
});
/**
 * This route updates an existing potion by ID
 * @route PUT /potions/:id
 * @returns {object} 201 - A JSON object with the contents of our updated potion
 */
router.put('/:id', async (req, res, next) => {
  let updateThis = await potionModel.update(req.params.id, req.body);
  res.status(200);
  res.send(updateThis);
});
/**
 * This route deletes an existing potion by ID
 * @route DELETE /potions/:id
 * @returns {string} 201 - A string that says, 'I have deleted one thing'
 */
router.delete('/:id', async (req, res, next) => {
  await potionModel.delete(req.params.id);
  res.status(200);
  res.send('I have deleted one thing (probably...we hope)');
});
module.exports = router
>>>>>>> 689ff0c937e2ff76bdb811d03368ec84c36b7363:lib/routes/potions.js
