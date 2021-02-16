// null, undefined, Boolean, number, string, object, symbol

console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'JavaScript')
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof null)
console.log(typeof function (){})
console.log(typeof NaN)

// Приведение типов

let language = 'JavaScript';

if (language) {
    console.log('The best language is:', language)
}

// '', 0, null, undefined, NaN, false

console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function (){}))

// Строки и числа

console.log(1 + '2');
console.log('' + 1 + 0);
console.log('3' * '8'); // number
console.log(4 + 10 + 'px');
console.log('px' + 5 + 10); // string

// ======

console.log(false == '')
console.log(false == [])
console.log(false == {})
console.log('' == 0)
console.log('' == [])
console.log('' == {})
console.log(0 == [])
console.log(0 == {})
console.log(0 == null)
