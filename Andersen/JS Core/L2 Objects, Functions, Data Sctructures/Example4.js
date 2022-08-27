// Object.is() determines whether two values are the same value.
// Two values are the same if one of the following holds:
//
// both undefined
// both null
// both true or both false
// both strings of the same length with the same characters in the same order
// both the same object (meaning both values reference the same object in memory)
// both numbers and
// both +0
// both -0
// both NaN
// or both non-zero and both not NaN and both have the same value

const obj = { a: 1 };

console.log(Object.is(obj, obj)); // true
console.log(Object.is([], [])); // false
console.log(Object.is(-0, +0)); // false
console.log(Object.is(NaN, 0/0)); // true