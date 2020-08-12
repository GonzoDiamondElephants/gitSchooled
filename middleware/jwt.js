'use strict';

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestParMinute: 5,
    jwksUri: 'https://auth0-tenant-demo.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://express.sample',
  issuer: 'https://auth0-tenant-demo.us.auth0.com/',
  algorithms: ['RS256'],
});

module.exports = jwtCheck;
