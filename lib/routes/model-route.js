'use strict';
//esoteric resources
const express = require('express');
const router = express.Router();
//internal modules
const modelFinder = require('../../middleware/model-finder');
//middleware
router.param('model', modelFinder);

//ALL THE ROUTES MAPPED OUT
//Create a single instance
router.post('/:model', async (req, res, next) => {
  let results = await req.collectionModel.create(req.body);
  res.status(201);
  res.send(results);
  next();
});
//Read everything there is to read
router.get('/:model', async (req, res, next) => {
  let result = await req.collectionModel.read({});
  res.status(201);
  res.send(result);
});
//Read one particular thing there is to read
router.get('/:model/id/:id', async (req, res, next) => {
  let result = await req.collectionModel.readById(req.params.id);
  res.status(200);
  res.send(result);
});
//Read one particular thing there is to read
router.get('/:model/sub/:sub', async (req, res, next) => {
  try {
    console.log('************************************************');
    // console.log('sub finder', req.params);
    console.log('************************************************');
    let result = await req.collectionModel.readBySub(req.params.sub);
    console.log('SUB FINDER RESULT', result);
    res.status(200);
    res.send(result);
  } catch (e) {
    console.error(e);
  }
});
//Update a particular thing
router.put('/:model/:id', async (req, res, next) => {
  let updateThis = await req.collectionModel.update(req.params.id, req.body);
  res.status(200);
  res.send(updateThis);
});
//Delete a particular thing
router.delete('/:model/:id', async (req, res, next) => {
  let deleteThis = await req.collectionModel.delete(req.params.id);
  console.log('delete', deleteThis);
  res.status(200);
  res.send('Deleted one thing! Hopefully...');
});
module.exports = router;
