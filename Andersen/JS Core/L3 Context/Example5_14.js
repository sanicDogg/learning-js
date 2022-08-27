function foo() {
    return (a) => {
    console.log('1: ', this.a) // 2
    console.log('2: ', a) // undefined
  }
}
  
  const obj1 = { a:  2 };
  const obj2 = { a:  3 };
  
  const bar = foo.call(obj1);
  const baz = bar.bind(obj2);
  
  bar.call(obj2);
  baz.call(obj2);