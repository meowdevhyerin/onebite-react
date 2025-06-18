// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "혜린", food: "낙곱새" },
  { name: "길동", food: "낙곱새" },
  { name: "철수", food: "낙곱새" },
  { name: "영희", food: "낙곱새" },
]

const nakgobsaePeople = arr1.filter((item) => item.food === "낙곱새");

console.log(nakgobsaePeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 숫자의 대소비교는 아님
// 원본 배열을 바꿈
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

// sort를 사용해서 숫자 대소비교를 하려면
let arr = [10, 3, 5];
arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr);

// 더 간단하게 하려면
arr.sort((a, b) => a - b); // 오름차순
arr.sort((a, b) => b - a); // 내림차순

// 4. toSorted
// 원본 배열 수정 X, 새로운 배열 반환

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환

let arr6 = ["hello", "world", "hehe"];
const joined = arr6.join(" ");
console.log(joined);