const x = 10;

const foo = fn => {
    const x = 20;

    fn();
}

const bar = () => console.log(x); // 10

foo(bar);
