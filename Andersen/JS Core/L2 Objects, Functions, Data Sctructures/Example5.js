const arr = [1, 'name', {rest: 'need'}];

console.log(arr[-1]) // undefined
console.log(new Array(100)) // [ <100 empty items> ]
console.log(new Array(100).length) // 100

//////////

// const number = arr[0];
// const string = arr[1];
// const object = arr[2];

// // как записать более красиво?

// const [number, string, object] = arr;