'use strict';

const app = require('express')();



app.use('/sync', (req, res, next) => {
  console.log('a');
  next();
  console.log('d');
});

app.get('/sync', (req, res) => {
  console.log('b');
  res.send('sync');
  console.log('c');
});



app.use('/async', (req, res, next) => {
  console.log('a');
  next();
  console.log('d');
});

app.get('/async', (req, res) => {
  console.log('b');
  process.nextTick(() => {
    console.log('e');
    res.send('async');
    console.log('f');
  });
  console.log('c');
});



app.listen(process.env.PORT);
