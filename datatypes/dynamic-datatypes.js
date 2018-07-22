
//Types are associated with values not variables
//same variable can hold multiple types
//we do not need to specify types
//most other languages require that a variable's data type is static - can not change

//this feature really bothers a lot of developers because they feel like this introduces the opportunity for problems, bugs and headaches
//those developers have added things to javascript to block this 
//TypeScript and Flow

//lots of developers love this feature of JavaScript

let myString = "what a great string";
console.log(myString);
console.log(typeof(myString));

myString = 4;
console.log(myString); //notice that this prints in blue
console.log(typeof(myString));

myString = true;
console.log(myString); //notice that this prints in blue
console.log(typeof(myString));

console.log(' ');

//quotes are important! 
//this is a string!
myString = "4";
console.log(myString); //notice that this does NOT print in blue
console.log(typeof(myString));

//here is another way to get a string
myString = String(4); //capital S in String()
console.log(myString); //notice that this does NOT print in blue
console.log(typeof(myString));

//here is another way to get a string
myString = 4;
console.log(myString.toString()); //notice that this does NOT print in blue
console.log(typeof(myString.toString()));

//let's get a number from a string
myString = '4';
console.log(myString); //notice that this does NOT print in blue
console.log(typeof(myString));
myString = Number(myString); //now it is a number (captial N)
console.log(myString); //prints in blue, it is a number
console.log(typeof(myString));

//what happens if we try to make a string into a number??
myString = 'Ha ha';
console.log(myString); //notice that this does NOT print in blue
console.log(typeof(myString));
myString = Number(myString); //now it is a number (captial N)
console.log(myString); //prints 'NaN' in blue = 'Not a Number'
console.log(typeof(myString)); //type of number

console.log(' ');

myString = null;
console.log(myString); 
console.log(typeof(myString)); //returns 'object' BOO! - this is a known bug in JavaScript, null is a primitive type

//array - hard brackets
myString = ['blue', 'red', 'green'];
console.log(myString);
console.log(typeof(myString)); //object

//object literal - curly brackets
myString = { ocean: 'blue', fire: 'red', grass: 'green'};
console.log(myString);
console.log(typeof(myString)); //object