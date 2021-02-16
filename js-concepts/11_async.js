const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first()
setTimeout(second, 1000)
third()

