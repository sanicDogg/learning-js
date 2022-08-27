const foo = () => {
    let count = 0;
    return function() {
      count++;
      return count
    }
  }
  
  let a = foo()
  
  console.log(a()); // 1
  console.log(a()); // 2
  console.log(a()); // 3