'use strict';
const app = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(app.server);

describe('successfully path the potion', () => {
  it('GET/potions', async () => {
    let potionData = {
      title: 'test13 Title',
      description: 'test13 description',
      ingredients: ['t13 salt', 't13 milk', 't13 water'],
      instructions: ['t13 sleep', 't13 walk', 't13 code'],
    };
    await mockRequest.post('/potions').send(potionData).set('Accept', 'application/json');
    let result = await mockRequest.get('/potions');
    console.log('result get' , result);
    expect(result.status).toBe(201);
    expect(result.body).toBeTruthy();
    // expect(result.title[0]).toBe('test Title');
    // expect(result.description[1]).toBe('test description');
    // expect(result.ingredients[2]).toBe(['t salt', 't milk', 't water']);
    // expect(result.instructions[3]).toBe(['t sleep', 't walk', 't code']);
    // expect(result.status(200));
  });
  it('GET/potions:_id', async () => {
    let potionData ={
      id: 5,
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let createdObj = await mockRequest.post('/potions').send(potionData).set('Accept', 'application/json');
    let readId = await mockRequest.get(`/potions/${createdObj.body._id}`).send(potionData).set('Accept', 'application/json');
    expect(readId.status).toBe(201);
    expect(readId.body).toBeTruthy();
  });
  it('POST/potions', async () => {
    let potionData ={
      title: 'test3 Title',
      description: 'test3 description',
      ingredients: ['t3 salt', 't3 milk', 't3 water'],
      instructions: ['t3 sleep', 't3 walk', 't3 code'],
    };
    let createdPotions = await mockRequest.post('/potions').send(potionData).set('Accept', 'application/json');
 
    expect(createdPotions.status).toBe(201);
    expect(createdPotions.body).toBeTruthy();
  });
  it('UPDATE/potions:_id', async () => {
    let potionData = {
      title: 'test5 Title',
      description: 'test5 description',
      ingredients: ['t5 salt', 't5 milk', 't5 water'],
      instructions: ['t5 sleep', 't5 walk', 't5 code'],
    };
    let createdPotions = await mockRequest.post('/potions').send(potionData).set('Accept', 'application/json')
    let putMethod = await mockRequest.put(`/potions/${createdPotions.body._id}`).send(potionData).set('Accept', 'application/json');
  
    // expect(JSON.stringify(putMethod.body)).toBe(
    //   JSON.stringify({
    //     title: 'test3 Title',
    //     description: 'test3 description',
    //     ingredients: ['t3 salt', 't3 milk', 't3 water'],
    //     instructions: ['t3 sleep', 't3 walk', 't3 code'],
    //   })
    // );
     expect(putMethod.status).toBe(200);
    expect(putMethod.body).toBeTruthy();
  });
  it('DELETE/potions:_id', async () => {
    let potionData = {
      title: 'sain awsome ',
      description: 'test6 description',
      ingredients: ['t6 salt', 't6 milk', 't6 water'],
      instructions: ['t6 sleep', 't6 walk', 't6 code'],
    };
   let cretedObj =   await mockRequest.post('/potions').send(potionData).send(potionData).set('Accept', 'application/json');
   
 console.log('createdObj' , cretedObj.body);
    let deleteMethod = await mockRequest.delete(`/potions/${cretedObj.body._id}`);
    expect(deleteMethod.status).toBe(200);
    expect(deleteMethod.body).toBeTruthy();
  });
});
