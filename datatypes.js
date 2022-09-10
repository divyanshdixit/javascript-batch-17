// js => dynamic datatype


// primitve => (non mutuable) => they don't have property and methods

// Numbers
// String
// Boolean
// undefined

const a = 10; // 1000 => 10
// a = 20 // 1001

// we cant change the reference for const variable

const name = 'divyansh';

// non-primitve (complex) => (mutable) => they have theier own property and methods

// null => typeof null = object
// Object 
// array => special kind of object 
// ['divyans','dixit']

const obj1 = { // refrence doesn't change 
    // key:value
    fname: 'div'
} // 2000

// obj1['fname'] = 'divyansh' // read-inly 
obj1.fname = 'new';

console.log(obj1);
// obj1 = 'noida'; // 2001


const obj2 = {
    fname:'new'
}

obj1 = obj2;
console.log(obj1);
var r = undefined;
var r;


null == undefined // true

// null => object 

null === undefined // false