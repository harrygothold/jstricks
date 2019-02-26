/*
 *
 * Shallow copy / clone an array
 *
 */

var fruits = ['apple', 'banana'];
//  var newFruits = fruits.slice(0); // shallow copies an array
// var newFruits = [].concat(fruits); //creates new copy
const newFruits = [...fruits, 'cherry']; //creates new array and pushes cherry

//  var newFruits = fruits; this mutates the array not create a new copy -- not good! use one of the above
// newFruits.push('cherry');

/*
 *
 * Get random element from an array
 *
 */