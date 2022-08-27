// Inheritance (class extends class)

// super() - вызов конструктора (constructor) супер класса (класса родителя)

// Если мы хотим использовать constructor дочернего класса, мы обязаны вызывать внутри constructor
// дочернего класса super(). Иначе this не будет инициализирован.

// Если мы не используем constructor дочернего класса, uper() вызовется автоматически и constructor
// родительского класса отработает в любом случае.

// Профит наследования - переиспользуемость и не дублирование кода (cоблюдаем принцип DRY)

class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`); 
    }
}

class Tariual extends Elf {
    constructor(name, weapon, superPower) {
        super(name, weapon);
        this.superPower = superPower;
    }

    showSuperPower() {
        super.attack();
        console.log(`And look at my super ability: ${this.superPower}`)
    }
}

const headOfElfs = new Tariual('Jeson', 'gun', 'invisibility');

headOfElfs.attack();
headOfElfs.showSuperPower();

console.log(headOfElfs.__proto__ === Tariual.prototype);
console.log(headOfElfs.__proto__.__proto__ === Elf.prototype);
console.log(headOfElfs.__proto__.__proto__.__proto__ === Object.prototype);
console.log(headOfElfs.__proto__.__proto__.__proto__.__proto__ === null);