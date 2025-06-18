// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 괄호 안에 아무것도 안 쓰면 현재 시간으로 설정됨
console.log(date1); // Wed Jun 18 2025 17:49:34 GMT+0900 (Korean Standard Time)

let date2 = new Date("2001-11-20");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); // 0월부터 11월까지
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
  year,
  month,
  date,
  hour,
  minute,
  seconds,
);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(3);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
