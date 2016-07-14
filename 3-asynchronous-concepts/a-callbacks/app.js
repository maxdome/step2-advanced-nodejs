'use strict';

console.log('a');

function exampleSuccess(callback) {
  process.nextTick(() => {
    callback(null, 'success data');
  });
}

exampleSuccess((err, data) => {
  if (err) {
    console.log(`c, error: ${err.message}`);
  } else {
    console.log(`c, success: ${data}`);
  }
});

function exampleError(callback) {
  process.nextTick(() => {
    callback(new Error('error message'));
  });
}

exampleError((err, data) => {
  if (err) {
    console.log(`d, error: ${err.message}`);
  } else {
    console.log(`d, success: ${data}`);
  }
});

console.log('b');
