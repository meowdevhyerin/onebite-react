// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor
//   setTimeout(() => {
//     console.log('안녕');
//     reject('왜 실패했는지 이유');
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다.');
      }
    });
  });
  return promise;
}

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메서드
// promise가 성공했을 때

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const p = add10(0);

p.then((result) => {
  console.log(result);
  const newP = add10(result);
  return newP;
}).then((result) => {
  console.log(result);
});
