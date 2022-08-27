// Решение предыдущей проблемы - Prototypal Inheritance (прототипное наследование)

// 3 шаг пути ООП - Prototypal Inheritance

// Все методы, которые являются общими для объектов, мы должны положить в одно место (объект) - хранилище методов (store)

// Далее мы должны связать прототипной связью наше хранилище методов и создаваемые объекты.

// Object.create()

const elf = {
    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`); 
    }
}

function createElf(name, weapon) {
    const newElf = Object.create(elf)

    newElf.name = name;
    newElf.weapon = weapon;

    return newElf;
}

const elfPeter = createElf("Peter", "bow");
elfPeter.attack()

const elfSam = createElf("Sam", "sword");
elfSam.attack()

// Таким образом у создаваемых объектов, через цепочку протатипов, будут доступны общие методы.

// Общие методы создаются ТОЛЬКО один раз, тем самым мы очень сильно экономим память.