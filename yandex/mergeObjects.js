// Создать функцию, которая вернет
// {width: 10, height: 20}

var array = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
]

console.log(
    f(array)
)

// Solution

function f(arr) {
    let ob = {};
    arr.forEach((item) => {
        ob[item.name] = item.value;
    })
    return ob;
}