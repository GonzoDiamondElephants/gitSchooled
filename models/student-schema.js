'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: 'String', required: true },
  house: { type: 'String', require: false },
  friend: { type: 'String', require: false },
  foe: { type: 'String', require: false },
  patronus: { type: 'String', require: false },
  gringCoin: { type: Number, require: false },
  picture: { type: 'String', required: false },
  sub: { type: 'String', unique: true, require: true },
  houseDescription: { type: String, required: false },
  houseIcon: { type: String, required: false },
});

let model = mongoose.model('students', schema);

module.exports = model;
