function foo()  {
  console.log(obj.name) // undefined
}

const obj = {
  a: 2,
  foo: foo,
}

obj.foo();

