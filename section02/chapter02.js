// 단락 평가
function returnFalse() {
  console.log("false");
  return false;
}

function returnTrue() {
  console.log("true");
  return true;
}

console.log(returnFalse() || returnTrue());

// 단락평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "홍혜린" });