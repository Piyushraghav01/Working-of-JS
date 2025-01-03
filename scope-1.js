/** Scope in JS */

// Global
// Function(Local)
// Block

var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = 'ten';
  let b = 'twenty';

  console.log('***** Inside print Function*****');
  console.log(a, b, c);
  console.log('***** *****');

  function innerPrint() {
    var a = 'inner10';
    console.log('*Inside innerPrint Function*');
    console.log(a, b, c);
  }
  innerPrint();
}

print();
console.log(a, b, c);
