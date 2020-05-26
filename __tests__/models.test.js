'use strict';
const supergoose = require('@code-fellows/supergoose');
const schema = require('../models/schema.js');
const Model = require('../models/model.js');
const newModel = new Model(schema);

beforeAll(async () => {
  await newModel.create({
    title: 'test Title',
    description: 'test description',
    ingredients: ['t salt', 't milk', 't water'],
    instructions: ['t sleep', 't walk', 't code'],
  });
});

describe('Happy path of CRUD function', () => {
  xit('It can successfully read all of it!!', async () => {
    let result = await newModel.readAll();
    console.log('result', result);
    expect(result.title).toBe('test Title');
    expect(result.description).toBe('test description');
    expect(result.ingredients).toBe(['t salt', 't milk', 't water']);
    expect(result.instructions).toBe(['t sleep', 't walk', 't code']);
  });
  it('It can successfully create and save in to MongoDb', async () => {
    let result = await newModel.create({
      title: 'test2 Title',
      description: 'test2 description',
      ingredients: ['t2 salt', 't2 milk', 't2 water'],
      instructions: ['t2 sleep', 't2 walk', 't2 code'],
    });
    expect(result).toBeTruthy();
    expect(result.title).toBe('test2 Title');
  });
  it('It successfully require to have a unique title,description,inge , instr', async () => {
    let result = await newModel.create({
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
    expect(result).toBeFalsy();
  });

  it('It can successfully read by Id', async () => {
    let result = await newModel.create({
      title: 'test4 Title',
      description: 'test4 description',
      ingredients: ['t4 salt', 't4 milk', 't4 water'],
      instructions: ['t4 sleep', 't4 walk', 't4 code'],
    });
    console.log('************************');
    console.log('result' , result);
    let readId = await newModel.readById(result._id);
    expect(readId).toBe({
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
  });
  it('It can successfully update by Id', async () => {
    let result = await newModel.create({
      "title": "test Title",
      "description": "test description",
      "ingredients": ["t salt", "t milk", "t water"],
      "instructions": ["t sleep", "t walk", "t code"],
    });
    // console.log('result' , result);
    let updated = await newModel.update(result._id);
    // console.log('the update' , updated);
    expect(updated).toBe(true);
  });
  it('it can successfully delete by Id', async () => {
    let result = await newModel.create({
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    });
    let deleted = await newModel.delete(result._id);
    expect(deleted).toBeTruthy();
  });
});
