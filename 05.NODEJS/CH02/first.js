
var mathModule = require('./mymodule.js');

console.log('Hello World');

var sum = mathModule.plus(1, 2);
var difference = mathModule.minus(1, 2);

console.log('1 + 2 = ' + sum);
console.log('1 - 2 = ' + difference);

var nameModule = require('./nameModule.js');

let hello = nameModule.hello('John', 'Doe');
console.log(hello);

let notification = nameModule.notification('John', 'Hello Barbara, Do you want to get Coffee?', 'Barbara');
console.log(notification);

console.log(nameModule.GREETINGS);


nameModule.GOODBYE = 'BYE';
console.log(nameModule.GOODBYE);