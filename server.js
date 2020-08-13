'use strict';
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();
const generateSwagger = require('./docs/swagger.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
const modelRouter = require('./lib/routes/model-route.js');
// const chatRoute = require('./lib/routes/chat-route.js');
// const jwt = require('./middleware/jwt.js');




const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());


app.use(express.urlencoded());
app.use(express.json());
generateSwagger(app);

//THIS IS FOR PUSHER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// END PUSHER REQS

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
 * 
 * THESE NEED TO BE MOVED OUT OF HERE WHEN WE KNOW WHAT IN THE HELL WE"RE DOING
 * 
 *
 * 
 * 
 */


const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1054870',
  key: '86f0c0ffd8f31ee6eeba',
  secret: '4916d3f39b9da5f81b6c',
  cluster: 'us3',
  // encrypted: true
})

app.post('/message', (req, res, next) => {
  const payload =  req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload);
  next();
})


/**
 * 
 * END REMOVAL
 * 
 *
 * 
 * 
 */







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
