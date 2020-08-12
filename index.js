'use strict';
const app = require('./server.js');
let port = process.env.PORT || 3001;
app.start(port);
