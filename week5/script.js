//2.1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function doubleNum(num){
  return num*2;
}

function doubleOddNumbers(arr) {
  var newNumbers = arr.filter(num => (num%2 !== 0));
  newNumbers = newNumbers.map(doubleNum);
  return newNumbers;
}

console.log(doubleOddNumbers(numbers));

//2.2
