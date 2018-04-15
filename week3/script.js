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
function Advertise(list, msg) {
  for( i = 0; i < list.length; i++){
    if(i == 0) {
      msg += " " + list[i]+"s";
    }else if (i == list.length-1) {
      msg += " and " + list[i]+"s.";
    }else {
      msg += ", " + list[i]+"s";
    }
  }
  return msg;
}

console.log("The list is: " + vechileList);
console.log(Advertise(vechileList, message));

//3.11
console.log("---------------------------  Part 3.11 ( Test advertisment with more elements) --------------------------- ");
vechileList.push("truck");
console.log("The new list is: " + vechileList);
console.log(Advertise(vechileList, message));

//3.12
console.log("---------------------------  Part 3.12 ( Create an empty object ) --------------------------- ");
var obj = {};
console.log(obj);
//3.13
console.log("---------------------------  Part 3.13 ( Teachers object ) --------------------------- ");
obj = {names: ["Tommy", "Victor", "Wojtek"]};
console.log( obj);

//14
console.log("---------------------------  Part 3.14 ( Add languages property to Teachers object ) --------------------------- ");
obj = { names: ["Tommy", "Victor", "Wojtek"],
  languages: ["HTML", "CSS", "JAVASCRIPT", "Git"]
};
console.log( obj);

//15
console.log("---------------------------  Part 3.15 ( Compare Array with  == and === ) --------------------------- ");
let x = [1,2,3];
let y = [1,2,3];
let z = y;
function arraysAreTheSame(arr1, arr2){
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++){
      if (arr1[i] != arr2[i]){
          return false;
      }
  }
  return true; 
}
  
function arraysAreIdentical(arr1, arr2){
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++){
      if (arr1[i] !== arr2[i]){
          return false;
      }
  }
  return true; 
}
console.log("x is: " + x);
console.log("y is: " + y);
console.log("z is: " + z);
console.log("arraysAreTheSame(x, y) is   : " + arraysAreTheSame(x, y) );
console.log("arraysAreIdentical(x, y) is : " + arraysAreIdentical(x, y)  );
console.log("arraysAreTheSame(z, y) is   : " + arraysAreTheSame(z, y) );
console.log("arraysAreTheSame(z, x) is   : " + arraysAreTheSame(z, x) );

//16
console.log("---------------------------  Part 3.16 ( Objects changing) --------------------------- ");
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
//Does the order that you assign (o3 = o2 or o2 = o3) matter?
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

function viewObjects() {
  console.log("o1 is: ");
  console.log(o1);
  console.log("o2 is: ");
  console.log(o2);
  console.log("o3 is: ");
  console.log(o3);
}
viewObjects();
console.log("change o2 to {foo: 'cat'}");
 o2 = {foo: 'cat'};
 o3=o2;
viewObjects();
console.log("changing o1 to {foo: 'rabbit'} ");
o1 = {foo: 'rabbit'};
viewObjects();
console.log("");
o1 = {name: 'David'};
o2 = {name: 'Per'};
o3 = {name: 'Eric'};
o2=o3;
viewObjects();
console.log("changing o2 to {name: 'Ali'}");
o2 = {name: 'Ali'};

viewObjects();

//17
console.log("---------------------------  Part 3.17 ( typeof typeof number) --------------------------- ");
let bar = 42;
type = typeof typeof bar;
console.log(type);

// more javascript

function checkArray(ary) {
  let i = 0;
  while(i < ary.length){
    let j = i + 1;
    while (j < ary.length){
      if (typeof ary[i] == typeof ary [j]) {
        console.log("Compare",ary[i], "with",ary[j],":","same type","i= ",i, "j= ",j);
        }else{
          console.log("Compare",ary[i], "with",ary[j],":","diffrent type","i= ",i, "j= ",j);} 
        j++;  
    }
    i++;
  }
}