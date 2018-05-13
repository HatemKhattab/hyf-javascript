// 2.1
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
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
//TODO: main() contains all the steps
function changeToHours(element){
  element.duration = Math.floor(element.duration/60);
}
// change duration to hours
tasks.map(changeToHours);
console.log(tasks);
// remove element that has duration less than 2 hours
var tasksModified =  tasks.filter(element => element.duration >= 2);

//calculate the billing if he take 80 € /hour
function calcBilling(element, rate){
  let cost = element.duration * 80;
  let cost_rounded = cost.toFixed(2);
  let cost_euro = "€ "+ cost_rounded;
  element.cost = cost_euro;
}

tasksModified.map(calcBilling);
