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
    array.push(new User(i+1, `name ${i}`, `surname ${i}`, `${i}lala@abc.com`, `+38012345678${i}`));
}
console.log(array);

//-------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(array.filter(item => item.id % 2 === 0));

//-------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array.sort((a, b) =>  b.id - a.id));

//-------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = orderFunc(order); // генерую масив з випадковою кількістю товарів, наприклад - кількісно в межах введеного order

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
console.log(arrayOfClients.sort((a, b) => a.order.length - b.order.length));
