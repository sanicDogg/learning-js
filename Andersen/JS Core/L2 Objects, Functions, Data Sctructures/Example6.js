const arr = ['firstValue', 2];

const push = arr.push('hello');
const pop = arr.pop();
const unshift = arr.unshift('show me your code');
const shift = arr.shift('');

console.log("Знаечние переменной push: ", push); // 3 (returns new array length)
console.log("Знаечние переменной pop: ", pop); // hello
console.log("Знаечние переменной unshift: ", unshift); // 3 (returns new array length)
console.log("Знаечние переменной shift: ", shift); // show me your code
console.log("Знаечние переменной arr: ", arr); // ['firstValue', 2]


// Мутирующие: 
// copyWithin()
// fill()
// pop()
// push()
// reverse()
// shift()
// sort()
// splice()