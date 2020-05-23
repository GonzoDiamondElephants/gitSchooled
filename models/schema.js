'use strict';
// one schema name : type string , require unique
//description: string require
// ingredients : array of string
//instruction:  array of string
//

const mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: { type: 'String', require: true },
  description: { type: 'String', require: true },
  ingredients: { type: [], require: true },
  instructions: { type: [], require: true },
});

let model = mongoose.model('potions', schema);

module.exports = model;
