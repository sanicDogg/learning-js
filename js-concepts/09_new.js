function Cat(color, name) {
    this.color = color;
    this.name = name;
}

Cat.prototype.sayHi = function () {
    console.log('HI!')
}
const cat = new Cat('black', 'KOT')
cat.sayHi()

// function myNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }
//
// const cat = myNew(Cat, 'black', 'KOT')
// console.log(cat)