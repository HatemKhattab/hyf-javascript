// 1 print hello world
console.log('Hello world!');
console.log('Hej världen!');

// 2 find the misstake
console.log("I'm awesome");

// 3 variables value
var x;
console.log('the value of my variable x will be: 5');
console.log(x);
x = 5;
console.log('I think the value now is 5 ');
console.log('the real value is: ' + x);

//4 assign different values to String variable
var y = 'Rima';
console.log('I think the value of y is: Rima')
console.log(y);
y = 'Auos';
console.log('I think the value of y now is: Auos');
console.log(y);

//5 max number
var z = 7.25;
console.log(z);
var a = parseInt(7.25);
console.log(a);
var highest_value = Math.max(a, z); 
console.log(highest_value);

//6 Arrays
var elements = [];
console.log('I think the array value is empty');
console.log(elements);
var my_favorite_animals = ['Hourse', 'Cat', 'Rabbit'];
console.log(my_favorite_animals);
my_favorite_animals.push('baby pig');
console.log(my_favorite_animals);

//7 More strings
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8 check variables type
let var_1 = 'hello';
let var_2 = 12.65;
let var_3 = true;
let var_4 = null;

console.log('The value of my variable var_1 is: ' + var_1);
console.log('The value of my variable var_2 is: ' + var_2);
console.log('The value of my variable var_3 is: ' + var_3);
console.log('The value of my variable var_4 is: ' + var_4);

console.log('I think the type of var_1 is: String ');
console.log('I think the type of var_2 is: Number ');
console.log('I think the type of var_3 is: boolean ');
console.log('I think the type of var_4 is: Object ');

console.log(typeof(var_1));
console.log(typeof(var_2));
console.log(typeof(var_3));
console.log(typeof(var_4));

if(typeof(var_1) == typeof(var_2)){
  console.log('SAME TYPE')
}
else {
  console.log('NOT SAME TYPE')
}

//9 Number division
var x = 7;
console.log('The value of (7 % 3) is: ' + 7 % 3);
console.log('The value of (9 % 2) is: ' + 9 % 2);
console.log('The value of (14 % 6 ) is: ' + 14 % 6);
console.log('The value of (23 % 10) is: ' + 23 % 10);

//10 explore more javascript
var array = ['Malmö', 78, 'Öresund', 198.01]
console.log(array);
console.log((7/0) === (6/0));