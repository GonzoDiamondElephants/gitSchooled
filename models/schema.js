'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: { type: 'String', required: true, unique: true },
  description: { type: 'String', required: true, unique: true },
  ingredients: [{ type: 'String', required: true, unique: true }],
  instructions: [{ type: 'String', required: true, unique: true }],
});

let model = mongoose.model('potions', schema);

module.exports = model;
