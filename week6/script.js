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

//3.3
function repeatStringNumTimes_byForLoop(str, num) {
  console.log('calling function repeatStringNumTimes_byForLoop(' + str+', '+ num+')');
  let string = '';
  if(num > 0){
    for(let i = 0; i < num; i++){
      string = string.concat(str);
    }
  }
  return string;
}

console.log(repeatStringNumTimes_byForLoop("abc", 3));

function repeatStringNumTimes_byWhile(str, num) {
  console.log('calling function repeatStringNumTimes_byWhile(' + str+', '+ num+')');
  let string = '';
  let i = 0;
  if (num > 0){
    while(i < num){
      string = string.concat(str);
      i++;
    }
  }
  return string;
}

console.log(repeatStringNumTimes_byWhile('abc', 3));

function repeatStringNumTimes_byDoWhile(str, num) {
  console.log('calling function repeatStringNumTimes_byDoWhile(' + str+', '+ num+')');
  let string = '';
  let i = 0;
  if (num > 0){
    do {
      string = string.concat(str);
      i++;
    }while(i < num)
  }
  return string;
}

console.log(repeatStringNumTimes_byDoWhile('abc', 3));

//3.4
var MotorBike = function() {
 this.wheels = 2;
 this.engines = 1;
 this.seats = 2;
};

var b = new MotorBike();
console.log(b);

//3.5
function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

//3.6
