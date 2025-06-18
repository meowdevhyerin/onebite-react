// 배열 순회 및 탐색

// 1. forEach
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1, 2, 3];
let isIncluded = arr2.includes(2);

console.log(isIncluded); // true

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
// 존재하지 않으면 -1 반환
// 얕은 비교로만 진행해서 객채 값은 찾지 못함
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는
// 특정 요소의 인덱스를 반환
// 특정 프로퍼티의 값을 기준으로 비교 가능

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

console.log(findedIndex);


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
  { name: "혜린" },
  { name: "길동" },
];

const finded = arr5.find((item) => item.name === "혜린");
console.log(finded);