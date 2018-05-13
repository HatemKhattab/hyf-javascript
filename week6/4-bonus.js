//remove the repeated element in an Array
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const numbers = [1, 2, 3, 4, 1, 5, 6, 3];

function getUnique_set(arr){
  return [... new Set(arr)];
}

function getUnique_forEach(arr){
  let uniqeArray = [];
  arr.forEach(element => {
    if(!uniqeArray.includes(element)){
      uniqeArray.push(element);
    }
  });
  return uniqeArray;
}


console.log(getUnique_set(numbers));
console.log(getUnique_forEach(numbers));

//To test the time it takes with ForEach way
console.time('timer');
const uniqueNumbers = getUnique_forEach(numbers);
const uniqueLetters = getUnique_forEach(letters);
console.timeEnd('timer');