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

//#3 boolean
let myBooleanVariable = true; //no quotes
console.log(myBooleanVariable);

//#4 null
let myBooleanVariable = true; //no quotes
console.log(myBooleanVariable);

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


//arrays
let myArrayOfNumbers = [1,2,3,4,5,6,7,8,9];
myArrayOfNumbers.push(10);
console.log(myArrayOfNumbers);

//object literals
var myObjectLiteral = {
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

//functions

//dates

//anything else