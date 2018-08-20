const first = 'Fox';
const second = 'Valley';
const third = 'Girls';
const fourth = 'Coding';
const fifth = 'Club';

let val;

val = first + second + third + fourth + fifth;
console.log(val);

//concatination
val = first + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth;
console.log('concatination: ' + val);

//appending
val = first;
val += ' ';
val += second;
val += ' ';
val += third;
val += ' ';
val += fourth;
val += ' ';
val += fifth;
console.log('appending: ' + val);

//escaping
const girls = 'Girl\'s';
val = first + ' ' + second + ' ' + girls + ' ' + fourth + ' ' + fifth;
console.log('escaping: ' + val);