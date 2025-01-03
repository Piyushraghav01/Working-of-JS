/** Scope in JS */

// Global
// Function(Local)
// Block

var varNum = 10;
let letnum = 20;
const constNum = 30;
console.log(varNum, letnum, constNum);

function print() {
  var varLocal = 10;
  let letLocal = 20;
  const constLocal = 30


  console.log(varNum, letnum, constNum);
  console.log(varLocal, letLocal, constLocal);
}

console.log(varNum, letnum, constNum);

print();

console.log(varLocal);
console.log(letLocal);
console.log(constLocal);