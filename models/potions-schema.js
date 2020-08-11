'use strict';

const mongoose = require('mongoose');
console.log('potion schema hit');
const schema = mongoose.Schema({
  title: { type: 'String', required: true, unique: true },
  description: { type: 'String', required: true },
  ingredients: [{ type: 'String', required: true }],
  instructions: [{ type: 'String', required: true }],
});

let model = mongoose.model('potions', schema);
console.log('*********Schema.js has been hit************');

module.exports = model;
