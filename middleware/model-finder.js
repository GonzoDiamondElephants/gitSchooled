'use strict';
const studentSchema = require('../models/student-schema.js');
const potionSchema = require('../models/potions-schema.js');
const Model = require('../models/model.js');

console.log('model finder middler ware');
const modelFinder = (req, res, next) => {
  switch (req.params.model) {
    case 'student':
      req.collectionModel = new Model(studentSchema);
      break;
    // case 'message':
    //   req.collectionModel = new Model();
    //   break;
    case 'potions':
      req.collectionModel = new Model(potionSchema);
      console.log('potions case', req.collectionModel);

      break;
    default:
      res.status(404);
      res.end();
      break;
  }
  next();
};
module.exports = modelFinder;
