'use strict';
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const generateSwagger = require('./docs/swagger.js');

const authRouter = require('./lib/router.js');

const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
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
app.use('/', authRouter);

/**
 * This route give us a standard Homepage message
 * @route GET /
 * @group Non-API
 * @returns {string} 200 - The string "It's Alivvvvvve"
 */
app.get('/', (req, res) => {
  res.status(200);
  res.send(`It's Alivvvvvve`);
});

app.listen(port, () => {
  console.log('server is up at ', port);
});
