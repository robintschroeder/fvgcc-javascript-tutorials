
//INITIALIZE VARIABLES
console.log("INITIALIZE VARIABLES");

//three ways to initialize a variable in JavaScript: 
//var is the old school way, we aren't going to use it
var oldSchoolVariable = "I have been around since the beginning of JavaScript, but we don't use me much anymore";
console.log(oldSchoolVariable);

//let is the modern way to make a variable
//variables that are initiallized with the let keyword can be reassigned 
let modernJavaScriptVariable = 'This is my modern js variable.';
console.log(modernJavaScriptVariable);
modernJavaScriptVariable = 'Whoops! new value';
console.log(modernJavaScriptVariable);

//third way to initialize a variable is const
const myConstVariable = 'Nice!';
//uncomment this next line to make an error!
//myConstVariable = "Boo!"; //variables created with const can not be reassigned
console.log(myConstVariable);
//we are going to use let most of the time, but you should know const is there

//variables with the let keyword can be undefined, until you assign a value to it
let newModernJavaScriptVariable; 
console.log(newModernJavaScriptVariable);
newModernJavaScriptVariable = 'Whoops! another new value';
console.log(newModernJavaScriptVariable);
//const badVariable; //you can't have an undefined const variable, this causes an error

//these are all string variables
//double or single quotes
//names of variables can't have any spaces
//names of variables - keep to letters, numbers and underscores
//regular variables should always start with a lower case letter
//you can put underscores in to show spaces, but it gets clunky
let new_school_variable = "I am brand new!";
console.log(new_school_variable);


//VARIABLES DON'T HAVE TO BE STRINGS
console.log("VARIABLES DON'T HAVE TO BE STRINGS");

//variables can be one number
let myNumber = 22;
console.log(myNumber);

//variables can be a list of numbers
let myArrayOfNumbers = [1,2,3,4,5,6,7,8,9];
myArrayOfNumbers.push(10);
console.log(myArrayOfNumbers);

//variables can be more complex too
let myComplexVariable = {
    name: 'Julie',
    age: 16,
    shoeSize: 7.5,
}
console.log(myComplexVariable);

//someone had a birthday!
myComplexVariable.age = 17;
console.log(myComplexVariable);
