// Инкапсуляций - объединение

// 1 шаг пути ООП - Инкапсуляций

// Инкапсуляция - упаковка данных и методов в единый объект (компонент)

const elf1 = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
};

elf1.attack()

const elf2 = {
  name: "Sally",
  weapon: "sword",
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
  }
};

// Здесь мы сгруппировали функционал:
// state - данные внутри объекта (свойство name, weapon)
// methods - функция attack (использует данные из объекта)

// ПРОБЛЕМА - дублирование кода (нарушение принципа DRY). 
// Если мы заходим создать ещё один объект с эльфом, то нам придётся прописывать его руками заново.