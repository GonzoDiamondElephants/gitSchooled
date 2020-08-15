'use strict';

// const express = require('express');
// const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '1054870',
  key: '86f0c0ffd8f31ee6eeba',
  secret: '4916d3f39b9da5f81b6c',
  cluster: 'us3',
  // encrypted: true
})

app.post('/message', async (req, res, next) => {
  const payload = await req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload);
  next();
})

// const pusher = new Pusher('1054870', {
//   cluster: 'us3',
// })

// pusher.trigger('my-channel', 'my-event', {
//   'message': 'Hello Muggle'
// })




// router.post('/users', (req, res) => {
  
// });

// router.post('/authenticate', (req, res) => {
  
// })


