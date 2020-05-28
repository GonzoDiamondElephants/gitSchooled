'use strict';
const serverError = (req, res, next) => {
  res.status(500);
  res.next();
};
module.exports = serverError;
