'use strict';

const async = require('async');

console.log('a');

function exampleSuccess(callback) {
  process.nextTick(() => {
    callback(null, 'success data');
  });
}

function exampleError(callback) {
  process.nextTick(() => {
    callback(new Error('error message'));
  });
}

async.series(
  [
    callback => {
      exampleSuccess((err, data) => {
        if (err) {
          console.log(`c, error: ${err.message}`);
        } else {
          console.log(`c, success: ${data}`);
        }
        callback();
      });
    },
    callback => {
      exampleError((err, data) => {
        if (err) {
          console.log(`d, error: ${err.message}`);
        } else {
          console.log(`d, success: ${data}`);
        }
        callback();
      });
    },
  ],
  () => {
    console.log('e, both examples are finished');
  }
);

console.log('b');
