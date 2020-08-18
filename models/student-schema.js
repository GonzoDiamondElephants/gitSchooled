'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: 'String', required: true },
  house: { type: 'String', require: false },
  friend: { type: 'String', require: false },
  foe: { type: 'String', require: false },
  patronus: { type: 'String', require: false },
  gringCoin: { type: Number, require: false },
  sub: { type: 'String', unique: true, require: true },
  // roles: {
  //   type: 'string',
  //   require: true,
  //   default: 'prefect',
  //   enum: ['supremeMugwump', 'prefect', 'squib'],
  // },
});

let model = mongoose.model('students', schema);

module.exports = model;
