'use strict';
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const generateSwagger = require('./docs/swagger.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
const modelRouter = require('./lib/routs/model-route.js');
// const jwt = require('./middleware/jwt.js');

const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
generateSwagger(app);

mongoose.connection.once('open', () => {
  console.log('mongo is connected');
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(express.static('./index.html'));

app.use('/', modelRouter);
// app.use(jwt);
app.use(express.static('./views'));
app.set('view engine', 'ejs');

/**
 * This route give us a standard Homepage message
 * @route GET /
 * @group Non-API
 * @returns {string} 200 - The string "It's Alivvvvvve"
 */
app.get('/', (req, res) => {
  res.status(200);
  res.render('index.ejs');
});

const handleListener = (port) => {
  app.listen(port, () => {
    console.log('server is up at ', port);
  });
};

module.exports = {
  server: app,
  start: handleListener,
};
