// C. Объединение отсортированных массивов (link)
//
// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	input.js
// Вывод	output.json
// Вам даны два отсортированных целочисленных массива nums1 и nums2, нужно поместить все элементы nums2 в nums1 так чтобы элементы итогового массива остались отсортированными.
//
//     Формат ввода
//     [46,55,88,0,0,0,0] 3 [18,29,80,90] 4
//
// Примечания
// количество элементов в массивах nums1 и nums2 равны m и n соответственно;
// можно считать, что в массиве nums1 зарезервировано место для всех элементов (n + m) и заполнены нулями;
// результат должен сохраниться в переменной nums1, результат функции явно возвращать не обязательно
// /**
//  * @param {number[]} nums1 - первый отсортированный массив
//  * @param {number} m - количество значимых элементов в nums1
//  * @param {number[]} nums2 - второй отсортированный массив
//  * @param {number} n - количество элементов в nums2
//  * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
//  */
// module.exports = function merge(nums1, m, nums2, n) {
//     // ваш код здесь
// }

nums1 = [46,55,88,0,0,0,0];
nums2 = [18,29,80,90];
m = 3;
a = 4;

merge(nums1, m, nums2, a);

function merge(nums1, m, nums2, n) {
    for (let i = nums1.length - m - 1, j = 0;
         i < nums1.length, j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    
    nums1.sort()
    console.log(nums1)
}