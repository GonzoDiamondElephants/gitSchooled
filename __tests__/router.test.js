'use strict';
const app = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(app.server);

describe('It can successfully get the potion', () => {
  it('GET/potions', async () => {
    let result = await mockRequest.get('/potions');
    expect(JSON.stringify(result.body)).toBe(
      JSON.stringify({
        title: 'test Title',
        description: 'test description',
        ingredients: ['t salt', 't milk', 't water'],
        instructions: ['t sleep', 't walk', 't code'],
      })
    );
  });
});
