function foo() {}

foo.food = 'pizza'
foo.name = 'aston'
foo.getFullName = (name, surname) => `${name} ${surname}`; 

console.log(foo.food) // pizza
console.log(foo.name) // foo (зарезервированное свойство функций)
console.log(foo.getFullName('Кекс', "Кунжутович")) // Кекс Кунжутович