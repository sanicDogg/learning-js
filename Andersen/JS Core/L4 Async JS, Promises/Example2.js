setTimeout(() => console.log('1'), 0);
  const promise = new Promise((resolve) => {
    console.log('2');
    setTimeout(() => console.log('3'), 0);
    resolve()
  });
promise.then(()=>console.log('4'));
console.log('5');

// 2 5 4 1 3