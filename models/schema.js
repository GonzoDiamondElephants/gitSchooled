'use strict';
// one schema name : type string , require unique
//description: string require
// ingredients : array of string
//instruction:  array of string
//

const mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  ingredients: [{ type: 'String', required: true }],
  instructions: [{ type: 'String', required: true }],
});

let model = mongoose.model('potions', schema);

module.exports = model;
