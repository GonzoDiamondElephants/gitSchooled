'use strict';
const app = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(app.server);

describe('successfully path the potion', () => {
  xit('GET/potions', async () => {
    let potionData = {
      title: 'test13 Title',
      description: 'test13 description',
      ingredients: ['t13 salt', 't13 milk', 't13 water'],
      instructions: ['t13 sleep', 't13 walk', 't13 code'],
    };
    await mockRequest.post('/potions').send(potionData);
    let result = await JSON.stringify(mockRequest.get('/potions'));
    expect(result.status).toBe(200);
    expect(result).toBeTruthy();
    // expect(result.title[0]).toBe('test Title');
    // expect(result.description[1]).toBe('test description');
    // expect(result.ingredients[2]).toBe(['t salt', 't milk', 't water']);
    // expect(result.instructions[3]).toBe(['t sleep', 't walk', 't code']);
    // expect(result.status(200));
  });
  xit('GET/potions:_id', async () => {
    let potionData = {
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let readId = await mockRequest.get('/potions:_id').send(potionData);
    expect(readId.status(200));
    expect(readId).toBeTruthy();
  });
  it('POST/potions', async () => {
    let potionData =JSON.stringify({
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    });
    let createdPotions = await mockRequest.post('/potions').send(potionData);
    console.log('post potions post ' , createdPotions);
    expect(createdPotions.status(200));
    expect(createdPotions).toBeTruthy();
  });
  it('UPDATE/potions:_id', async () => {
    let potionData = JSON.stringify({
      "title": 'test5 Title',
      "description": 'test5 description',
      "ingredients": ['t5 salt', 't5 milk', 't5 water'],
      "instructions": ['t5 sleep', 't5 walk', 't5 code'],
    });
    let putMethod = await mockRequest.put('/potions/1').send(potionData);
    console.log('update', potionData);
    // expect(JSON.stringify(putMethod.body)).toBe(
    //   JSON.stringify({
    //     title: 'test3 Title',
    //     description: 'test3 description',
    //     ingredients: ['t3 salt', 't3 milk', 't3 water'],
    //     instructions: ['t3 sleep', 't3 walk', 't3 code'],
    //   })
    // );
     expect(putMethod.status).toBe(200);
    expect(putMethod).toBeTruthy();
  });
  xit('DELETE/potions:_id', async () => {
    let potionData = JSON.stringify({
      title: 'test6 Title',
      description: 'test6 description',
      ingredients: ['t6 salt', 't6 milk', 't6 water'],
      instructions: ['t6 sleep', 't6 walk', 't6 code'],
    });
    let createdPotions = await mockRequest.post(potionData);
    console.log('createdpotions' , createdPotions);
    let deleteMethod = await mockRequest.delete('/potions/1').send(createdPotions);
    expect(potionData.status).toBe(200);
    expect(deleteMethod).toBeTruthy();
  });
});
