// 구조분해할당

// 1. 배열의 구조분해할당
let arr = [1, 2, 3];
let [one, two, three] = arr;

console.log(one);
``
// 2. 객체의 구조분해 할당
let person = {
  name: '혜린',
  pet: '쮜',
  age: 25,
};

let { name, pet, age } = person;
console.log(name, pet, age);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, pet, age }) => {
  console.log(name, pet, age);
};

func(person);
