'use strict';

const co = require('co');

console.log('a');

function exampleSuccess() {
  return new Promise(resolve => {
    process.nextTick(() => {
      resolve('success data');
    });
  });
}

co(function* () {
  const data = yield exampleSuccess();
  console.log(`c, success: ${data}`);
});

function exampleError() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      reject(new Error('error message'));
    });
  });
}

co(function* () {
  try {
    yield exampleError();
  } catch (err) {
    console.log(`d, error: ${err.message}`);
  }
});

console.log('b');
