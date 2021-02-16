// Функции sort, map, filter, reduce

numbers = [23, 41, 5, "dsa", 123, 7452, 42];
humans = [{
    name: "Petya", age: 36, sex: "M"
}, {
    name: "Vasya", age: 42, sex: "M"
}, {
    name: "Lesha", age: 26, sex: "M"
}, {
    name: "Alex", age: 20, sex: "M"
},
    {
        name: "Lena", age: 30, sex: "W"
    },
    {
    name: "Olya", age: 25, sex: "W"
}];

console.log(numbers);

let onlyNums = numbers.filter((value, index, arr) => {
    return typeof value === "number";
})

let h = humans.filter(value => {
    return value.sex === "M";
}).sort((a, b) => { return b.name - a.name});

h.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0
})

console.log("humans", h);
onlyNums.sort((v2, v1) => v1 - v2);

console.log("sorterd onlyNums:", onlyNums);

let sum = onlyNums.reduce((acc, item, i, arr) => acc + item)

console.log("The sum of onlyNums is", sum)