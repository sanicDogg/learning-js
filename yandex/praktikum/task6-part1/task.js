/*
* Вы устроились разработчиком в автомобильную компанию.
* Первое задание — починить код, который отвечает за отображение информации о транспорте и цене.
* Поправьте классы так, чтобы ошибка TypeError: Cannot read property 'vendor' of undefined
* больше не отображалась. Вносите изменения только в файл task.js.
*/

class Transport {
    constructor(type, price, vendor, model) {
        this.type = type;
        this.price = price;
        this.vendor = vendor;
        this.model = model;

        // Добавленные строки
        this.getInfo = this.getInfo.bind(this);
        this.getPrice = this.getPrice.bind(this);
    }

    getInfo() {
        return `${this.vendor}, ${this.model}`;
    }

    getPrice() {
        return this.price.toLocaleString('ru-RU') + ' ₽';
    }
}

class Car extends Transport {
    constructor(vendor, model, doorsCount, price) {
        super('car', price, vendor, model);
        this.doorsCount = doorsCount;

        // Добавленные строки
        this.getDoorsCount = this.getDoorsCount.bind(this);
    }

    getDoorsCount() {
        return `Кол-во дверей: ${this.doorsCount}`;
    }
}

class Bike extends Transport {
    constructor(vendor, model, maxSpeed, price) {
        super('bike', price, vendor, model);
        this.maxSpeed = maxSpeed;

        // Добавленные строки
        this.getMaxSpeed = this.getMaxSpeed.bind(this);
    }

    getMaxSpeed() {
        return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
}
