// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLength); // 7이 출력된다

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 3이 출력된다
console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 새로운 길이를 반환함
console.log(newLength2, arr4);

// shift와 unshift는 push / pop 보다 느리게 동작함
// 맨 앞에 요소 추가 / 제거는 한 칸씩 밀리거나 당겨져야 하기 때문에

// 5. slice

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
console.log(sliced);

// 6. concat
// 두 개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7); // [1, 2, 3, 4]
let concatedArr2 = arr7.concat(arr6); // [3, 4, 1, 2]
console.log(concatedArr);
console.log(concatedArr2);