const x = 10;

function foo() {
    const x = 20;
    console.log(x); //20
}

(function(someFunc) {
    const x = 30;

    someFunc()
})(foo)

