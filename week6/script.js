//3.1
function foo(func) {
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

//3.2
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  createArray(startIndex, stopIndex, values);
  console.log(values);
  for(let j = 0; j <= values.length; j++){
    if(values[j] % 3 == 0){ threeCallback(); }
    if(values[j] % 5 == 0){ fiveCallback(); }
  }
}

function createArray(startElement, stopElement, arr) {
  for(let i = startElement; i <= stopElement; i++){
    arr.push(i);
  }
}

function sayThree(){
  console.log('call sayThree');
}

function sayFive(){
  console.log('call sayFive');
}

threeFive(10, 15, sayThree, sayFive);


