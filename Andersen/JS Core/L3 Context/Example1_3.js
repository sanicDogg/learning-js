const obj = {};

function foo() {}
const bar = () => {}

foo.x = obj;
bar.x = obj;

console.log(foo.x == bar.x) // true
console.log(foo.x === bar.x) // true