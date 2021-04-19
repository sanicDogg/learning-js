// JavaScript. Подробное руководство. Дэвид Флэнаган
// Поиск всех текстовых узлов, потомков указанного элемента

// Возвращает простое текстовое содержимое элемента e,
// выполняя рекурсивный
// обход всех дочерних элементов. Этот метод действует
// подобно свойству textContent
function textContent(e) {
    var child, type, s = ""; // s хранит текст всех дочерних узлов
    for(child = e.firstChild; child != null; child = child.nextSibling) {
        type = child.nodeType;
        if (type === 3 || type === 4) // Узлы типов Text и CDATASection
            s += child.textContent;
        else if (type === 1) // Рекурсивный обход узлов типа Element
            s += textContent(child);
    }
    return s;
}

let input = document.querySelector(".input");
let textNodes  = textContent(input);
textNodes = textNodes.split(" ").filter(item => item !== "" && item !== "\n");
console.log(textNodes);
let res =  [""];
for (const item of textNodes) {
    res[res.length - 1] += " " + item;
    if (item.charAt(item.length - 1) !== "\n") continue;
    res.push("");
}
res = res.map(item=>item.trim()).filter(item => item !== "");
console.log(res);
let output = document.querySelector(".output");
res.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    output.appendChild(li);
})