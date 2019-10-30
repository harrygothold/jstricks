/*
 *
 * Shallow copy / clone an array
 *
 */

var fruits = ["apple", "banana"];
//  var newFruits = fruits.slice(0); // shallow copies an array
// var newFruits = [].concat(fruits); //creates new copy
const newFruits = [...fruits, "cherry"]; //creates new array and pushes cherry

//  var newFruits = fruits; this mutates the array not create a new copy -- not good! use one of the above
// newFruits.push('cherry');

/*
 *
 * Get random element from an array
 *
 */

const ages = [12, 32, 98, 45, 38, 76];
// Math.round(Math.random() * ages.length); Gets a random index to select a number from
ages[Math.round(Math.random() * ages.length)];

/*
 *
 * Remove falsy values in array
 *
 */
var temps = [72, 68, 65, undefined, 80, 0, NaN, "", null];
const newTemps = temps.filter(temp => temp);
console.log(newTemps);
