/**
 * JavaScript Array
 * 
 * Arrays are list-like objects with methods 
 * to perform traversal and mutation operations. 
 */

// Create an array - a list of items
var list = [1, 2, 3];

// Display contents of the array
console.log(list); // [ 1, 2, 3 ]

// Display the number of items in the array
console.log('Number of items in the array:'); // Number of items in the array:
console.log(list.length); // 3

/**
 * Use forEach method to display all items
 */
console.log('Items:'); // Items:
list.forEach(
    item => console.log(item)
);

// forEach method: alternative
list.forEach(
    (item, index, array) => {
        console.log('=====================');
        console.log('item: ' + item);
        console.log('index: ' + index);
        console.log('array: ' + array);
    }
);