const array1 = [1,2,3];
const a = 'apple';

const foo = (arr, number) => {
  a = 'orange'; // TypeError  Assignment to constant variable.
  arr.push(4);

  if(number) {
    number = Math.random();
  }

  console.log(arr, number) // [ 1, 2, 3, 4 ] randomNum

  return { arr, number }
}

const { arr: array2, number} = foo(array1, 1);

console.log('array1: ', array1); // [ 1, 2, 3, 4 ]
console.log('array2: ', array2); // [ 1, 2, 3, 4 ]

console.log('number: ', number); // randomNum

console.log(array1 === array2); // true