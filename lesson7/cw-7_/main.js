// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, capacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;

    this.drive = function drive() {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function info() {
        console.log("model - " + this.model);
        console.log("producer - " + this.producer);
        console.log("year - " + this.year);
        console.log("maxSpeed - " + this.maxSpeed);
        console.log("capacity - " + this.capacity);
    }
    this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function changeYear (newValue) {
        this.year = newValue;
    }
    this.addDriver = function addDriver (driver) {
        this.driver = driver;
    }
}

// перевірка:
let car = new Car("1600", "BMW", 1993, 200, 1.5);
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log(car.maxSpeed);
car.changeYear(2000);
console.log(car.year);
car.addDriver({nameOfDriver: "Ivan", ageOfDriver: 46})
console.log(car.driver.nameOfDriver);

//------------------------------------------------------------------------------------------------------------
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor (model, producer, year, maxSpeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log("model - " + this.model);
        console.log("producer - " + this.producer);
        console.log("year - " + this.year);
        console.log("maxSpeed - " + this.maxSpeed);
        console.log("capacity - " + this.capacity);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

// перевірка:
let car1 = new Car1("i500", "Audi", 1989, 190, 1.3);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
console.log(car1.maxSpeed);
car1.changeYear(1988);
console.log(car1.year);
car1.addDriver({nameOfDriver: "Ali", ageOfDriver: 34})
console.log(car1.driver.ageOfDriver);

//------------------------------------------------------------------------------------------------------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popeljushka {
    constructor(name, age, sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
    }
}
let popeljushkas = [];
for (let i = 0; i < 10; i++) {
    popeljushkas.push(new Popeljushka("Popeljushka " + i, 5+i, 10 + 0.1*i));
}

//------------------------------------------------------------------------------------------------------------
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prynz {
    constructor(name, age, tufelka) {
        this.name = name;
        this.age = age;
        this.tufelka = tufelka;
    }
}
let prynz = new Prynz("Alibaba", 29, 10.8);

//------------------------------------------------------------------------------------------------------------
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let taSamaPopeljushka;
for (let i = 0; i < popeljushkas.length; i++) {
    if (popeljushkas[i].sizeOfFoot === prynz.tufelka) {
        taSamaPopeljushka = popeljushkas[i];
        break;
    }
}
console.log(taSamaPopeljushka.name);

//------------------------------------------------------------------------------------------------------------
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let taSamaPopeljushka2 = popeljushkas.find(value => {
    return value.sizeOfFoot === prynz.tufelka;
});
console.log(taSamaPopeljushka2.name);