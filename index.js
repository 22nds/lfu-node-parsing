var colors = require('colors/safe');

console.log("Write to the console.");

var volume = ` 	
 ▁ ▂ ▃ ▄ ▅ ▆ █
`;

console.log(volume);
console.log(colors.rainbow(volume));


console.log(colors.yellow.bold(`hi color!`));
console.log(colors.green('OK'));
console.log(colors.red.bold('Error'));