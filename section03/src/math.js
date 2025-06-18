// math 실습 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add: add,
//   sub: sub,
// };

// common js 방식
// module.exports = {
//   add,
//   sub,
// };

// ES 방식
export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
