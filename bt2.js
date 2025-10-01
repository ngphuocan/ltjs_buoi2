//Hoisting var
console.log("var trước khi gán:", hoistingTestVar); // undefined
var hoistingTestVar = 10;
//biến var được hoisting (đưa lên đầu) nhưng không gán giá trị  undefined

//Hoisting let
try {
  console.log("let trước khi gán:", hoistingTestLet); // Gây lỗi ReferenceError
  let hoistingTestLet = 20;
} catch (error) {
  console.log("Lỗi với let:", error.message);
}
//lt cũng được hoisting nhưng nằm trong "temporal dead zone" không thể truy cập trước khi khai báo

//Hoisting const
try {
  console.log("const trước khi gán:", hoistingTestConst); // Gây lỗi ReferenceError
  const hoistingTestConst = 30;
} catch (error) {
  console.log("Lỗi với const:", error.message);
}
//const giống let, nhưng còn yêu cầu gán giá trị ngay khi khai báo

//Khai báo đúng
let loopCounter = 0;
const maxLoops = 5;
for (; loopCounter < maxLoops; loopCounter++) {
  console.log("Lần lặp:", loopCounter);
}
