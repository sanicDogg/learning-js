const foo = (...arg) => {
    console.log(arg.filter(el => el === 1)) // [1]
  }
  
  foo(1, 2, 3)