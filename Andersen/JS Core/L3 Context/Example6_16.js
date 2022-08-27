const x = 10;

function foo() {
  console.log('a: ', x); // ?
}

function bar(fn) {
  const x = 20;

  return function () {
    setTimeout(() => {
      fn();
    }, 1000);

    console.log('b: ', x); // ?
  };
}

bar(foo)();