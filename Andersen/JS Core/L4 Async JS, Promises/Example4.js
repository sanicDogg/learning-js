Promise.reject(10)
    .then(value => console.log('1: ', value)) // ?
    .then(value => console.log('2: ', value)) // ?
	.catch(10)
    .then(
        value => console.log('3: ', value), // ?
        value => value + 10 + 10
     )
    .finally(value => console.log(`4: ${value}`)) // 4: undefined
    .then(value => console.log(`5: ${value}`))  // 5: 30
    .catch(err => console.log(`6: ${err}`)) // ?