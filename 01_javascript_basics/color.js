var colors = require('colors/safe');

var volume = ` 	
 ▁ ▂ ▃ ▄ ▅ ▆ █
`

console.log(colors.rainbow(volume));


console.log(colors.yellow.bold(`hi `) + colors.green('green') + colors.red.bold(` color`));
console.log(colors.green('OK'));
console.log(colors.red.bold('Error'));