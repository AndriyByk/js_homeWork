// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

//-------------------------------------------------------------------
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(new User(i, `name ${i}`, `surname ${i}`, `${i}lala@abc.com`, `+38012345678${i}`));
}
console.log(array);

//-------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let arrayOfUsers = array.filter((item) => {
    return item.id % 2 === 0;
})
console.log(arrayOfUsers);

//-------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
array.sort(((a, b) => {
    return a.id - b.id;
}))
console.log(array);

//-------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = orderFunc(order);// генерую масив з випадковою кількістю товарів - наприклад, в межах введеного order

        function orderFunc(order) {
            let array = [];
            let quantityOfProductsTillOrder = Math.round(Math.random() * order);
            for (let i = 0; i < quantityOfProductsTillOrder; i++) {
                array.push({nameOfProduct: "name " + i})
            }
            return array;
        }
    }
}

//-------------------------------------------------------------------
// створити пустий масив, наповнити його 10 об'єктами Client
let arrayOfClients = [];
let numberOfClients = 10;
for (let i = 0; i < numberOfClients; i++) {
    arrayOfClients.push(new Client(
        `${i}`,
        `name ${i}`,
        `surname ${i}`,
        `${i}lala@abc.com`,
        `+38012345678${i}`,
        `${numberOfClients}`))
}

//-------------------------------------------------------------------
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrayOfClients.sort((a, b) => {
    return a.order.length - b.order.length;
});
console.log(arrayOfClients);
