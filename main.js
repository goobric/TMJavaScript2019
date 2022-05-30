console.log("Hello Coders");
console.error('This is an error');
console.warn('This is a warning');

// var, let, const
// var is a globally scoped variable
// let & const were added with ES6

// let, is used for re-assigning values
let alt = 30;
alt = 31;

console.log(alt);

let score;
score = 10;
console.log(score);

// const, is abbreviation for constant, it can not be directly re-assigned and changed

const namen = "Brad Travsery"

// Primetive Data Types
// String, Numbers, Boolean, null, undefined, Symbol

const name = 'Brad';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // to initialize

console.log(typeof name); //age, rating, isCool, x, y, z

// Concatenation
console.log('My name is and I am age');
console.log('My name is ' + name + 'and I am ' + age);