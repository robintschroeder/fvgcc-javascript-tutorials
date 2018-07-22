alert ('Hello fvgcc');

console.log('Hello Browser Console');

//single line comments

/* 
    multi 
    line 
    comments 
*/

//print an integer
console.log(123); //notice this prints in blue in the console
//print a boolean (true/false)
console.log(true); //notice this prints in blue in the console
//make a variable and print it's value
var greeting = "What's Up?";
console.log(greeting);


console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});


//how long will this take?
console.time('Time Test');
    console.log('Ha Ha Ha Ha Ha Ha Ha Ha');
    console.log('Ha Ha Ha Ha Ha Ha Ha Ha');
    console.log('Ha Ha Ha Ha Ha Ha Ha Ha');
    console.log('Ha Ha Ha Ha Ha Ha Ha Ha');
    console.log('Ha Ha Ha Ha Ha Ha Ha Ha');
    console.log('Ha Ha Ha Ha Ha Ha Ha Ha');
console.timeEnd('Time Test');


console.error('This is an error, notice that it is red. Something really bad must have happened.');
console.warn('I am a yellow console warning.');
//console.clear();

