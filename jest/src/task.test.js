const doubleNums = require('./task.js');

const input = [1,2,3,4,5];
const output = [11,12,13,14,15];


test('adds 1 + 2 to equal 3', () => {
  expect(doubleNums(input)).toEqual(output);
});