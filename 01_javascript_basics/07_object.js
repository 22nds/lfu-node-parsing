/**
 * Object
 * 
 * An object is a collection of related data 
 * and/or functionality.
 */

// Create an object
var myObject = {
    name: 'LFU',
    location: 'Ljubljana',
    year: () => {
        var today = new Date();
        return today.getFullYear();
    }
};

// Display object properties
console.log(myObject.name);
console.log(myObject.location);
console.log(myObject.year());