// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
console.log(var5);

// 둘 다 null or undefined가 아니면 먼저 있는 값으로 출력된다

let userName = "홍혜린";
let userNickName = "meowdev";

let displayName = userName ?? userNickName;

// userName이 있다면 userName을 쓰고, 없으면 userNickName으로 사용하기

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;

// 3항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환

let var8 = 10;

// 요구사항: 변서 res에 var8의 값이 짝수면 짝, 홀수면 홀 반환
let res = var8 % 2 === 0 ? "짝" : "홀";

console.log(res);
