/*
*
*
* how to find the length of an object
*
*/
let arr = [1, 2, 3];
console.log(arr.length);

var obj = { a: 1, b: 2, c: 3 };
let length = Object.keys(obj).length;
console.log(length);


/*
*
* Iterating over an object
*
*/
let username = {
    first: 'John',
    last: 'Doe'
}

for (let u in username) {
    if (username.hasOwnProperty(u)) {
        console.log(u, username[u]);
    }
}

for (let u of Object.keys(username)) {
    console.log(u, username[u]);
}

//creates an array for each key value pair
Object.entries(username).forEach(([key, value]) => console.log(key, value));


/*
 *
 * Converting an object to an array
 * 
 */
var person = {
    name: 'Annie',
    age: 40
};
//Property names as an array
// Object.keys(person);
var arr2 = [];
Object.keys(person).forEach(key => arr2.push([key, person[key]]));
console.log(arr2);

var result = Object.keys(person).map(key => [key, person[key]]);
console.log(result);

console.log(Object.entries(person))