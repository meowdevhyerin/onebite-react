// 1. 묵시적 형 변환
// -> js 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// -> 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

//console.log(strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);

// console.log(strToNum2); // NaN

// 숫자만 포함되어 있지 않은 문자열을 형 변환하고 싶을때는 parseInt 사용

strToNum2 = parseInt(str2);
console.log(strToNum2); // 10


// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + '입니다');
console.log(typeof numToStr1);