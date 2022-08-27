const x = 1;

function foo(x) {
    console.log('Первый вызов: ', x) // undefined

    return 2

    var x = 3;
    console.log('Второй вызов: ', x) // не выполнится
}

foo()