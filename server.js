'use strict';
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRouter = require('./lib/router.js');

const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());

mongoose.connection.once('open', () => {
  console.log('mongo is connected');
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

app.use('/', authRouter);

app.get('/', (req, res) => {
  res.send(`It's alivvvvvve!!`);
});



app.listen(port, () => {
  console.log('server is up at ', port);
});
