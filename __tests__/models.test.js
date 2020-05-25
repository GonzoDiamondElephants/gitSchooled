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
  it('It can successfully read by query', async () => {
    let result = await newModel.readAll();
    expect(result).toBe({
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
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
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
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
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
    let updated = await newModel.update(result._id);
    expect(updated).toBe(true);
  });
  it('it can successfully delete by Id', async () => {
    let result = await newModel.create({
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
    let deleted = await newModel.delete(result._id);
    expect(deleted).toBe(true);
  });
});
