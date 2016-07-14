'use strict';

console.log('a');

function exampleSuccess() {
  return new Promise(resolve => {
    process.nextTick(() => {
      resolve('success data');
    });
  });
}

exampleSuccess()
  .then(data => {
    console.log(`c, success: ${data}`);
  });

function exampleError() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      reject(new Error('error message'));
    });
  });
}

exampleError()
  .catch(err => {
    console.log(`d, error: ${err.message}`);
  });

console.log('b');
