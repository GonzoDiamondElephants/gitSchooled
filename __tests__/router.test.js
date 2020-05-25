'use strict';
const app = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(app.server);

describe('successfully path the potion', () => {
  xit('GET/potions', async () => {
    let potionData = {
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    await mockRequest.post('/potions').send(potionData);
    let result = await JSON.stringify(mockRequest.get('/potions'));
    expect(result.title[0]).toBe('test Title');
    expect(result.description[1]).toBe('test description');
    expect(result.ingredients[2]).toBe(['t salt', 't milk', 't water']);
    expect(result.instructions[3]).toBe(['t sleep', 't walk', 't code']);
    expect(result.status(200));
  });
  it('GET/potions:_id', async () => {
    let potionData = {
      id: '1',
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let readId = await mockRequest.get('/potions:_id').send(potionData);
    expect(readId.status(200));
    expect(readId).toBe(true);
  });
  it('POST/potions', async () => {
    let potionData = {
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let createdPotions = await mockRequest.post('/potions').send(potionData);
    expect(createdPotions.status(200));
    expect(createdPotions).toBe(true);
  });
  it('UPDATE/potions:_id', async () => {
    let potionData = {
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let putMethod = await mockRequest.put('/potions:_id').save(potionData);
    expect(JSON.stringify(putMethod.body)).toBe(
      JSON.stringify({
        title: 'test3 Title',
        description: 'test3 description',
        ingredients: ['t3 salt', 't3 milk', 't3 water'],
        instructions: ['t3 sleep', 't3 walk', 't3 code'],
      })
    );
    expect(putMethod.status(200));
  });
  it('DELETE/potions:_id', async () => {
    let potionData = {
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let deleteMethod = await mockRequest
      .delete('/potions:_id')
      .save(potionData);
    expect(potionData.status(200));
    expect(deleteMethod).toBe(true);
  });
});
