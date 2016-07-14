'use strict';

console.log('a');

function exampleSuccess() {
  return new Promise(resolve => {
    process.nextTick(() => {
      resolve('success data');
    });
  });
}

(async () => {
  const data = await exampleSuccess();
  console.log(`c, success: ${data}`);
})();

function exampleError() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      reject(new Error('error message'));
    });
  });
}

(async () => {
  try {
    await exampleError();
  } catch (err) {
    console.log(`d, error: ${err.message}`);
  }
})();

console.log('b');
