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

console.log(Object.entries(person));

/*
 *
 * Check if a property exists in an object
 *
 */

var user = {
    name: 'John',
    address: {
        street: 'Main',
        city: 'London'
    }
};

// var property = 'street' in user.address;
// console.log(property);

var property = user.hasOwnProperty();
console.log(property);


/*
 *
 * Prevent object properties from being added
 *
 */

var user = {
    name: 'jeff',
    email: 'jeff@gmail.com'
}

Object.getOwnPropertyDescriptor(user);
Object.preventExtensions(user); // can't add a property

/*
 *
 * Prevent object properties from being deleted
 *
 */

var user = {
    name: 'john',
    email: 'john@gmail.com'
}

Object.getOwnPropertyDescriptor(user); // to check properties
Object.seal(user); //prevents value modification

/*
 *
 * Prevent object properties from being modified
 *
 */

var user = {
    name: 'Greg',
    email: 'greg@gmail.com'
}

Object.freeze(user); //makes it impossible to edit
console.log(Object.isFrozen(user)); //checks if its frozen


/*
 *
 * Merge multiple objects into one object
 *
 */

let defaultUser = {
    name: '',
    email: '',
    subscribed: true
}

let actualUser = {
    name: 'John',
    email: 'john@gmail.com'
}

var user2 = {
    phone: 555 - 555 - 555
}

// let userData = Object.assign(defaultUser, actualUser);
// console.log(userData);

var userData = { ...defaultUser, ...actualUser };
console.log(userData);


/*
 *
 * Computed properties -- dynamically choose name of properties on objects
 *
 */

var key = window.prompt('Set a property name');

var obj = {
    [key]: 1
}

/*
 *
 * Delete or filter a property from an object
 *
 */

var name = {
    first: 'John',
    last: 'Doe',
}

// delete name.last;
// console.log(name);

function filterObj(obj, prop) {
    var filteredObj = {}
    var result = Object.keys(obj).filter(k => k !== prop).map(key => filteredObj[key] = obj[key]);
    console.log(filteredObj);
    return filteredObj;
}

filterObj(name, 'last');

/*
 *
 * Get all values in an object
 *
 */

var name = {
    first: "John",
    last: 'Doe',
    age: 40
}

// var values = Object.keys(name).map(key => name[key]);
// console.log(values);

var values = Object.values(name);
console.log(values);
