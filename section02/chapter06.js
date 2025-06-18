// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: '혜린',
  pet: '쮜',
  age: 25,
};

// 2.1 Object.keys 사용
// -> 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

console.log(keys); // ['name', 'pet', 'age']

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

// 2.2 Object.values 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
  console.log(key);
}
