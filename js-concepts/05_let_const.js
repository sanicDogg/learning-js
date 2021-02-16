// Let
let a = 'Variable a'
let b = 'Variable b'

{
    a = 'New Variable A';
    let b = 'Local Variable B';
    console.log('Scope A', a);
    console.log('Scope B', b);
}

// Const

const PORT = 8080
const array = ['JavaScript', 'is', 'Awesome']
array.push('!')
console.log(array)

const obj = {}
obj.name = 'Alexander'
obj.age = 20
console.log(obj)
delete obj.name
console.log(obj)