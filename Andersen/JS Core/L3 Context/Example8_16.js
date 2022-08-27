const x = 10;

function foo(fn) {
    const x = 20;
    return fn.bind({})
}

function bar() {
    console.log(x) // 10
}

const baz = foo(bar);

baz();