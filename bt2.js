console.log("var trước khi gán:", hoistingTestVar);
var hoistingTestVar = 10;
try {
  console.log("let trước khi gán:", hoistingTestLet);
  let hoistingTestLet = 20;
} catch (error) {
  console.log("Lỗi với let:", error.message);
}
try {
  console.log("const trước khi gán:", hoistingTestConst);
  const hoistingTestConst = 30;
} catch (error) {
  console.log("Lỗi với const:", error.message);
}
let loopCounter = 0;
const maxLoops = 5;
for (; loopCounter < maxLoops; loopCounter++) {
  console.log("Lần lặp:", loopCounter);
}
