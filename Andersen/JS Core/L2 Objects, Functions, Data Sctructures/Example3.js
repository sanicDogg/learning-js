const obj = {
    name: undefined, // not included in JSON
    age: 100,
    foo: () => console.log('hello'), // not included in JSON
    rabbit: null,
    tableInTheRoom: true,
    food: 'meat',
    somethingUnique: Symbol(), // not included in JSON
}

console.log('Результат преобразования', JSON.stringify(obj)) // ?

