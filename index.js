'use strict';
const app = require('./server.js');
let port = process.env.PORT || 5000;
app.start(port);
