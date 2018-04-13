//Week 3 Assignment

//1. Strings
console.log("--------------------------- Part 1 (Strings) --------------------------- ");
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("Original String is: " + myString);
console.log("The length of myString is: " + myString.length);
myString = myString.replace(/,/g , " ");
console.log("The modified String is: " + myString);

//2. Arrays
console.log("---------------------------  Part 2 (Arrays) --------------------------- ");
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log("favoriteAnimals: " + favoriteAnimals);
favoriteAnimals.push("turtle");
console.log("favoriteAnimals after adding turtle : " + favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("favoriteAnimals after adding meerkat : " + favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log("favoriteAnimals: " + favoriteAnimals);
var meerkat_index = favoriteAnimals.indexOf("meerkat");
console.log("the item you are looking for is at index: " + meerkat_index);

//3.1 
console.log("---------------------------  Part 3.1 (Sum function) --------------------------- ");
function Sum(num1, num2, num3) {
  return num1+num2+num3;
}
console.log("Sum(1,2,3) =  " + Sum(1,2,3));

//3.2 
console.log("---------------------------  Part 3.2 (colorCar function) --------------------------- ");
function colorCar(color) {
  return "a " + color+ " car";
}
console.log("colorCar('red'): " + colorCar("red"));

//3.3 
console.log("---------------------------  Part 3.3 (printObject  function) --------------------------- ");
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);
function printObject(object){
  for (var properity in object) {
    console.log("key => " + properity + "|  value => " + object[properity]);
  }
}
printObject(person);

//3.4
console.log("---------------------------  Part 3.4 () --------------------------- ");