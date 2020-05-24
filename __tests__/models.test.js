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
  it('It can successfully create and save in to MongoDb', () => {
    let result = newModel.create({
      title: 'test2 Title',
      description: 'test2 description',
      ingredients: ['t2 salt', 't2 milk', 't2 water'],
      instructions: ['t2 sleep', 't2 walk', 't2 code'],
    });
    expect(result).toBeTruthy();
    expect(result.title).toBe('test2 Title');
  });
  it('It successfully require to have a unique title,description,inge , instr', () => {
    let result = newModel.create({
      title: 'test Title',
      description: 'test description',
      ingredients: ['t salt', 't milk', 't water'],
      instructions: ['t sleep', 't walk', 't code'],
    });
    expect(result).toBeFalsy();
  });
});
