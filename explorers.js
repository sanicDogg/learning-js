// A. Исследователи
// Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. Список имеет следующий формат:
//
//     [
//         [<explorer1>, <toponym1>, <toponym2>, ...],
//         [<explorer2>, <toponym2>, <toponym3>, ...],
//         [<explorer3>, <toponym4>, <toponym1>, ...],
//         ...
//     ]
//             Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных исследователи.
//
//             Формат ввода
//             [
//             ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
//             ["Mawson", "South Pole", "New Hebrides"],
//             ["Hillary", "Everest", "South Pole"]
//             ]
//             Формат вывода
//             [
//             ["Everest", "Hillary", "Mallory"],
//             ["South Pole", "Hillary", "Mawson"],
//             ["Mont Blanc", "Mallory"],
//             ["Pillar Rock", "Mallory"],
//             ["New Hebrides", "Mawson"]
//             ]
//

explorers = [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
    ["Mawson", "South Pole", "New Hebrides"],
    ["Hillary", "Everest", "South Pole"]
];

console.log("Input:", explorers)
console.log("Output:")
reformList(explorers)

function reformList(list) {
    let hashmap = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = 1; j < list[i].length; j++) {
            let temp = [list[i][j], list[i][0]];
            hashmap.push(temp);
        }
    }

    for (let i = 0; i < hashmap.length; i++) {
        for (let j = 0; j < hashmap.length; j++) {
            if (i == j) continue;
            if (hashmap[i][0] === hashmap[j][0]) {
                hashmap[i].push(hashmap[j][1]);
                // splice() удаляет из массива элементы и возвращает их
                hashmap.splice(j, 1);
            }
        }
    }

    console.log(hashmap)
}
