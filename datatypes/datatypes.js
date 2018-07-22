//PRIMITIVE DATA TYPES
console.log('PRIMITIVE DATA TYPES');
//stored directly in the location the variable accesses
//stored on the stack

//#1 string
let myStringVariable = 'myString';
console.log(myStringVariable);

//#2 number
let myNumberVariable = 45; //no quotes
console.log(myNumberVariable);
//add two decimals
console.log(myNumberVariable.toFixed(2));

//#3 boolean
let myBooleanVariable = true; //no quotes
console.log(myBooleanVariable);

//#4 null
let myNullVariable = null; //no quotes
console.log(myNullVariable);

//#5 undefined
let myUndefinedVariable = undefined; //no quotes
console.log(myUndefinedVariable);

//#6 symbols
//Every symbol value returned from Symbol() is unique.  
//A symbol value may be used as an identifier for object properties; this is the data type's only purpose.  
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');
console.log(typeof symbol1);
// expected output: "symbol"
console.log(symbol3.toString());
// expected output: "Symbol(foo)"
console.log(Symbol('foo') === Symbol('foo'));
// expected output: false




//REFERENCE DATA TYPES
console.log('REFERENCE DATA TYPES');
//accessed by reference
//objects that are stored on the heap
//these variables don't hold the data, they hold a pointer to a location in memory where the value is stored


//arrays - hard brackets []
console.log("ARRAYS");
let myArrayOfNumbers = [1,2,3,4,5,6,7,8,9];
myArrayOfNumbers.push(10);
console.log(myArrayOfNumbers);

//functions - curley brackets {}
console.log("FUNCTIONS");
let myFunction = function(){
    alert('what a great function!'); 
} 
// notice that you aren't seeing this alert
// you need to call the function to see it
// comment this out
// myFunction();

//object literals - curley brackets {}
console.log("OBJECT LITERALS");
let myObjectLiteral = {
    stringProperty: 'some string value',
    numberProperty: 2,
    booleanProperty: false,
    arrayProperty: [1,2,3],
    nestedObjectLiteral: { 
        nestedStringProperty: 'this thing here', 
        nestedNumberProperty: 55 
    },
    functionProperty: function(){
        alert('my function has been executed.');
    }
};

console.log('obj literal variable created');
console.log(myObjectLiteral.stringProperty);

//we can execute the function by calling it
myObjectLiteral.functionProperty();
console.log('obj literal function executed');


//dates
console.log("DATES");
let myNewDate = Date.now();
console.log(myNewDate); //printing milliseconds since January 1, 1970.
let myDate = new Date(2018, 06, 04);
console.log(myDate);
//Wed Jul 04 2018 00:00:00 GMT-0500 (Central Daylight Time)
//notice how it takes a zero start array number for month (6) and not the actual month number (July = 7)? confusing!



//anything else!