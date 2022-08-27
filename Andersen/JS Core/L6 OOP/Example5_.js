// Класс - это blueprint (схема / модель / шаблон) того, что мы хотим создать.

// Класс - это формальное обстрактное множество, описывающее 
// одинаково начальное состояние и поведение его объектов

// Как гласит ООП, мы должны запечатывать (инкапсулировать) данные и методы
// в одну сущность. В классах мы так же следуем этому принципу, помещая state и methods внутрь класса

// Instance - экземпляр Класса. Объект, который был создан с помощью класса.

export class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`); 
    }
}

// elfSam - instance класса Elf
const elfSam = new Elf("Sam", "sword");

console.log(elfSam instanceof Elf); // true

elfSam.attack();



// BONUS - класс при транспиляции преобразуется в функцию-конструктор, и выглядит это следующим образом:

'use strict'

var Elf =
  (function() {
    function Elf(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    var _proto = Elf.prototype;

    _proto.attack = function attack() {
        console.log(`${this.name} attacks with ${this.weapon}`); 
    }

    return Elf
  })()
  
// const elfSam = new Elf("Sam", "sword");
// elfSam.attack();