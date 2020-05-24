'use strict';

// get();
// post();
//update();
//delete();

const express = require('express');
const router = express.Router();
const schema = require('../models/schema.js');
const Model = require('../models/model.js');

const potionModel = new Model(schema);

/**
 * This route gives us all the potions
 * @route GET /potions
 * @returns {object} 201 - A list of all potions that are saved to our collection
 */
router.get('/potions', async (req, res, next) => {
  let result = await potionModel.readAll(req.body);
  console.log('Read all potions ', result);
  res.status(201);
  res.send(result);
});

/**
 * This route gives us a specifc potion
 * @route GET /potions/:id
 * @returns {object} 201 - A specific potion fetched by id
 */
router.get('/potions/:id', async (req, res, next) => {
  let result = await potionModel.readById(req.params.id);
  console.log('Read potion by ID ', result);
  res.status(201);
  res.send(result);
});

/**
 * This route creates a new potion
 * @route POST /potions
 * @returns {object} 201 - A JSON object with the contents of our new potions
 */
router.post('/potions', async (req, res, next) => {
  // let parsedResult = req.body;
  // console.log('PARSED RESULT - ROUTER.JS', parsedResult);
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
router.put('/potions/:id', async (req, res, next) => {
  let updateThis = await potionModel.update(req.params.id, req.body);
  res.status(200);
  res.send(updateThis);
});

/**
 * This route deletes an existing potion by ID
 * @route DELETE /potions/:id
 * @returns {string} 201 - A string that says, 'I have deleted one thing'
 */
router.delete('/potions/:id', async (req, res, next) => {
  await potionModel.delete(req.params.id);
  res.status(200);
  res.send('I have deleted one thing (probably...we hope)');
});

module.exports = router;
