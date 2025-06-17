// 함수 선언

function greeting() {
  console.log("안녕하세요!");
}

// greeting();


let area1 = getArea(5, 5);
console.log(area1);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}