Promise.resolve(10)
  .then(e => console.log('1: ', e)) // 10
  .then(e => Promise.resolve(e))
  .then(e => {
    if (!e) {
      throw 'Error caught';
    }
  })
  .catch(e => {
    console.log('2: ',e); // Error caught
    return new Error('New error');
  })
  .then(e => {
    console.log('3 ', e.message); // New error
  })
  .catch(e => {
    console.log('4 ', e.message); // ?
  })
  .finally(e => {
      console.log('5 ', e) // undefined
  });