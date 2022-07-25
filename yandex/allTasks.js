/*
* Задача на поиск простых чисел
*/

getPrimes(10) // [2, 3, 5, 7, 9]

function getPrimes(n) {
  if (n < 2) return -1;
  if (n === 2) return [2];
  let res = [];
  for (let i = 2; i < n; i++) {
    let isCurrentPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isCurrentPrime = false;
        break;
      }
    }
    if (isCurrentPrime) res.push(i);
  }
  return res;
}

/*
* Задача на поиск простых чисел
*/

