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

router.get('/potions', async (req, res, next) => {
  let result = await potionModel.readAll(req.body);
  console.log('Read all potions ', result);
  res.status(201);
  res.send(result);
});

router.get('/potions/:id', async (req, res, next) => {
  let result = await potionModel.readById(req.params.id);
  console.log('Read potion by ID ', result);
  res.status(201);
  res.send(result);
});

router.post('/potions', async (req, res, next) => {
  console.log('REQUEST.BODY - ROUTER.JS', req.body);
  let result = await potionModel.create(req.body);
  console.log('Create new potion ', result);
  res.status(201);
  res.send(result);
});

router.put('/potions/:id', async (req, res, next) => {
  let updateThis = await potionModel.update(req.params.id, req.body);
  res.status(200);
  res.send(updateThis);
});

router.delete('/potions/:id', async (req, res, next) => {
  await potionModel.delete(req.params.id);
  res.status(200);
  res.send('I have deleted one thing (probably...we hope)');
});


module.exports = router;
