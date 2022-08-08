/*
* Задача на поиск простых чисел
*/

getPrimes(10) // [2, 3, 5, 7]

function getPrimes(n) {
  if (n < 2) return -1;
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
* Задача на проверку валидности скобок
*/

checkBrackets("{()}[]") // true
checkBrackets("{[}]") // false

function checkBrackets(s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  for (const ch of s) {
    if (isCloseBracket(ch)) {
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch)
    }
  }

  return stack.length === 0;

  function isCloseBracket(b) {
    return b === "]" || b === "}" || b === ")";
  }
}

/*
* Задача на слияние объектов
*/

mergeObjects([
  {name: 'width', value: 10},
  {name: 'height', value: 20}
])
// {width: 10, height: 20}

function mergeObjects(array) {
  let ob = {};
  array.forEach((item) => {
    ob[item.name] = item.value;
  })
  return ob;
}

/*
* Задача на нахождение суммы
* Работает с любым количеством вызовов. Требуется toString
*/

getSum(5)(6)(10) // 21

function getSum(n) {
  let sum = n;

  const f = next => {
    sum += next;
    return f;
  }

  f.toString = () => sum;

  return f;
}

/*
*  Генерация случайного HEX-цвета
*/

getRandomColor() // #xxxxxx

function getRandomColor() {
  return "#" + Math.random().toString(16).slice(2, 8)
}

/*
*  Анаграммы
*/

getAnagrams("нос", "сон", "снедь", "днесь")

//[
//   ["нос", "сон"],
//   ["днесь", "снедь"]
// ]

function getAnagrams(...args) {
  let map = new Map();
  let anagrams = [];

  for (const word of args) {
    let proceed = word.split("").sort().join("");
    if (map.has(proceed)) {
      anagrams.push([word, map.get(proceed)]);
      map.delete(proceed);
    } else {
      map.set(proceed, word);
    }
  }

  return anagrams
}

/*
*  Обход дерева
*/

const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

function getTreeValues(tree) {
  let res = [tree.value];
  if (tree.children) {
    for (const nextChild of tree.children) {
      res = res.concat(getTreeValues(nextChild));
    }
  }
  return res;
}

/*
*  Проверка массива на монотонность
*/

// ([0, 1, 5, 9, 15]) => true
// ([0, 1, 1, 5, 9, 9, 15]) => true
// ([15, 8, 4, 2, 1]) => true
// ([0, 1, 5, 15, 4]) => false

function checkArrayMonotony(arr) {
    let seqGrow = 0;
    for (let i = 1; i < arr.length; i++) {
        const pairGrow = Math.sign(arr[i] - arr[i - 1]);

        if (pairGrow === 0) {
            continue;
        }

        seqGrow = seqGrow || pairGrow;

        if (pairGrow !== seqGrow) {
            return false;
        }
    }
    return true;
}

/*
*  RLE сжатие строки
*/

zipRle('AAABbbbBcCCC') // A3Bb3BcC3

function zipRle(str) {
  let zipped = [str[0]]
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    let current = str[i];
    let prev = str[i - 1];
    if (prev === current) {
      count++;
    } else {
      let num = count !== 1 ? count : "";
      zipped.push(num + current);
      count = 1;
    }
    if (i === str.length - 1) {
      if (count !== 1) {
        zipped.push(count);
      }
    }
  }

  return zipped.join("");
}

/*
*  Обращение к свойству объекта
*/

const o = {
  a: {
    b: {},
    c: 42
  },
  z: null
};

getProp(o, 'a.c') // 42
getProp(o, 'a.d') // undefined
getProp(o, 'z')  // null

function getProp(object, prop) {
  let propNames = prop.split(".");
  let tempObj = {};
  Object.assign(tempObj, object);

  for (let i = 0; i < propNames.length; i++) {
    if (propNames[i] in tempObj) {
      tempObj = tempObj[propNames[i]];
    } else return undefined;
  }

  return tempObj
}

/*
*  Сортировка нечетных
*/

oddSort([7, 3, 4, 9, 5, 2, 17]); // => [3, 5, 4, 7, 9, 2, 17]

function oddSort(arr){
  arr.forEach((item, i) => {
    if (item % 2 === 1) {

      let curr = item;

      for (let j = 0; j < i; j++) {
        if (arr[j] % 2 === 1) {
          if (arr[j] > curr) {
            let temp = curr;
            curr = arr[j];
            arr[j] = temp;
          }
        }
      }
      arr[i] = curr;
    }
  })
  return arr;
}

/*
* text-overflow: ellipsis;
* white-space: nowrap;
* overflow: hidden;
 */

/*
* Задача на реализацию ключевого слова new
 */

function constructFrom(fnConstructor, ...params) {
  const res = {};
  Object.setPrototypeOf(res, fnConstructor.prototype);
  return fnConstructor.apply(res, params) || res;
}