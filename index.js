const { add, multiply, isEmpty } = require('./utils');

console.log('Welcome to the Test Project!');
console.log('==========================');
console.log();
console.log('Testing basic functions:');
console.log('add(2, 3) =', add(2, 3));
console.log('multiply(4, 5) =', multiply(4, 5));
console.log('isEmpty("") =', isEmpty(''));
console.log('isEmpty("hello") =', isEmpty('hello'));
console.log();
console.log('Run "npm test" to execute the test suite!');