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
    console.log("key => " + properity + ",  value => " + object[properity]);
  }
}
printObject(person);

//3.4
console.log("---------------------------  Part 3.4 (vehicleType function) --------------------------- ");
function vehicleType(color, code) {
  if (code == 1) {
    return "a " + color + " " + "car"; 
  } else if (code == 2){
    return "a " + color + " " + "motorbike"; 
  }
}
console.log("vehicleType('blue', 1) ===> " + vehicleType("blue", 1));
console.log("vehicleType('red', 2) ===> " + vehicleType("red", 2));

//3.5
console.log("---------------------------  Part 3.5 (write function without if) --------------------------- ");
console.log("yes");

//3.6
console.log("---------------------------  Part 3.6 (Adding age attribute to vehicleType function  ) --------------------------- ");
//asume that a new car has age <= 1 
function vehicleType(color, code, age) {
  if (code == 1 && age <= 1) {
    return "a " + color + " new " + "car"; 
  }else if(code == 1 && age > 1) {
    return "a " + color + " old " + "car";
  }
  else if (code == 2 && age <= 1){
    return "a " + color + " new " + "motorbike"; 
  }
  else if (code == 2 && age > 1){
    return "a " + color + " old " + "motorbike"; 
  }
}
console.log("vehicleType('blue', 1, 5)  ===>  " + vehicleType("blue", 1, 5));
console.log("vehicleType('red', 1, 1)   ===>  " + vehicleType("red", 1, 1));
console.log("vehicleType('blue', 2, 3)  ===>  " + vehicleType("blue", 2, 3));
console.log("vehicleType('black', 2, 1) ===>  " + vehicleType("black", 2, 1));

//3.7
console.log("---------------------------  Part 3.7 (Creating Vechile List) --------------------------- ");
let list = ["motorbike", "caravan", "bike"];
console.log("list = " + list);

//3.8
console.log("---------------------------  Part 3.8 (Find third element) --------------------------- ");
console.log("Third item of the list is: " + list[2]);

//3.9
console.log("---------------------------  Part 3.9 () --------------------------- ");

//3.10
console.log("---------------------------  Part 3.10 (Advertisment using vehicle list ) --------------------------- ");
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
var vechileList = ["car", "motorbike", "caravan", "bike"];
let message = "Amazing Joe's Garage, we service";

for( i = 0; i < vechileList.length; i++){
  if(i == 0) {
    message += " " + vechileList[i]+"s";
  }else if (i == vechileList.length-1) {
    message += " and " + vechileList[i]+"s.";
  }else {
    message += ", " + vechileList[i]+"s";
  }
 
}
console.log(message);