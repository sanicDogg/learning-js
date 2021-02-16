// __proto__   - ES6
// Object.getPrototypeOf()   - ES5

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says meow`)
// }

const cat = new Cat('Kot', 'white')

cat.__proto__.voice = function () {
    console.log("voice!")
}
console.log(Cat.prototype) // Cat { voice: [Function] }
cat.voice() // voice!
//console.log(cat.__proto__ === Cat.prototype)

// ==========

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person()
person.name = 'Alexander'

console.log('skin' in person) // true
console.log(person.legs) // 2
console.log(person.name) // Alexander

console.log(person.hasOwnProperty('skin')) // false

// Object.create()

const proto = {year: 2021}
const myYear = Object.create(proto)

console.log(myYear.year)

console.log(myYear.hasOwnProperty('year'))

