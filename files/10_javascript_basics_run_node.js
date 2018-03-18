/**
 * Run the script with: 
 * node <and_the_filename>
 */

// Import package with colors
var colors = require('colors/safe');

// Output text to the console
console.log("Hi from the console.");

var volume = ` 	
 ▁ ▂ ▃ ▄ ▅ ▆ █
`;

// Output text to the console
console.log(volume);

// Color version
console.log(colors.rainbow(volume));

// More color text in different colors
console.log(colors.yellow.bold('Hi color'));
console.log(colors.green('OK'));
console.log(colors.red.bold('Error'));