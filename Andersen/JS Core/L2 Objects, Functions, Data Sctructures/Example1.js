// __proto__ - есть вообще у ВСЕХ объектов. 
// __proto__ разных по типу объектов - разные, у равных - одинаковые. 
// Чтобы точно определить этот самый __proto__ нужно точно знать с помощью какой функции-конструктор создан объект
// __proto__ любого объекта ссылается на prototype класса с помощью которого он был создан.

const city = { name: 'Vitabsk', population: 300_000 } // валидно ? есть прото ?
const person = { name: 'Vlad', age: 24 } // есть прото ?
const aston = 'company' // если обратимся при помощи метода, будет ли это обхектом ? есть прото?
const PI = 3.14

// console.log(city.__proto__ === person.__proto__) // true
// console.log(city.__proto__ === aston.__proto__) // false
// console.log(city.name.__proto__ === aston.__proto__) // true

//////////

// Prototype - это объект...самый обычный объект.
// prototype - независимый объект, с определённым набором свойств и методов. Прототип есть только у функций и классов

// console.log(Object.prototype === String.prototype) // false
// console.log(Object.prototype === Object.prototype) // true
//
// console.log(city.__proto__ === Object.prototype) // true
// console.log(PI.__proto__ === Number.prototype) // true

//////////

// const emptyArrowFunction = () => {}
// function emptyDefaultFunction() {}
//
// console.log([].prototype) // undefined
// console.log({}.prototype) // undefined
// console.log(emptyDefaultFunction.prototype) // {}
// console.log(emptyArrowFunction.prototype)  // undefined

//////////

// Зачем нам вообще нужен __proto__

// Ответ: если мы ищем какое-либо свойство или метод в объекте, но его там нет, 
// то JS полезет искать его через ссылку __proto__ в prototype класса, с помощью которого тот был создан