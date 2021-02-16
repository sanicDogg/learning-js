// Задача на удаление дубликатов в массиве.

var array = [1, 5, 3, 212, 6, 4, 5, 3, 21, 21, 8, 99, 54, 67, 32, 5, 1];

console.log(array);

result = countDuplicates(array);
let u = [];
console.log("Unique elements:")
result.map((v, k) => {
   if (v === 1) u.push(k);
});
console.log(u.join(" "));

console.log("Duplicates:");
result.map((v, k) => {
    if (v !== 1) console.log(k + " counts " + v + " times.");
});

function countDuplicates(array) {
    let hashmap = [];
    array.map((v, i) => {
        if (hashmap[v]) hashmap[v]++
        else hashmap[v] = 1;
    });

    return hashmap;
}

function removeDuplicates(array) {
    let hashmap = {};
    array.map((v, i) => {
        hashmap[v] = true;
    });

    return Object.keys(hashmap);
}

function removeDuplicates2(array) {
    let set = new Set(array.values());
    return Array.from(set);
}