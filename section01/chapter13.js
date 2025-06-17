// 1. 콜백함수  
function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub);

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});
