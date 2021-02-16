// B. Поиск чисел в массиве с определённой суммой (link)
// Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k.
//
//     Пример:
// Вход: nums = [10, 15, 3, 7], k = 17
//
// Выход: true
//
// Примечания
// В качестве решения предоставьте функцию следующего вида:
//
//     /** @returns Boolean */
//     module.exports = function(nums, k) {
//         // ваш код здесь
//     }

nums = [10, 15, 3, 7]
k = 17

console.log(ifSumExists(nums, k))

function ifSumExists(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) return true;
        }
    }
    return false;
}