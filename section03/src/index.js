// Common JS 방식

// const moduleData = require('./math');

// console.log('안녕 Node.js');
// console.log(moduleData);

// console.log(moduleData.add(1, 3));
// console.log(moduleData.sub(4, 2));

// const { add, sub } = require('./math');
// console.log(add(1, 7));
// console.log(sub(10, 3));

// ES 방식
// import multiply, { add, sub } from './math.js';
// console.log(add(1, 7));
// console.log(sub(10, 3));
// console.log(multiply(3, 3));

import randomColor from 'randomcolor';
const color = randomColor();
console.log(color);
