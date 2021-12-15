// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let i = 0; i < users.length; i++) {
    let user = document.createElement("div");
    user.id = `user${i}`;
    user.innerText = `${users[i].name} with age of ${users[i].age} has status ${users[i].status}`;
    document.body.appendChild(user);
    let button = document.createElement("button");
    button.id = `button${i}`;
    button.innerText = "додати до улюблених";
    document.body.appendChild(button);
}

for (let i = 0; i < users.length; i++) {
    let clickedButton = document.getElementById(`button${i}`);
    clickedButton.onclick = function () {
        if (localStorage.getItem("favorites") === null) {
            localStorage.setItem("favorites", JSON.stringify([]));
        }
        let arrayFromStorage = JSON.parse(localStorage.getItem("favorites"));
        let user = {
            name: users[i].name,
            age: users[i].age,
            status: users[i].status
        };
        for (let j = 0; j < arrayFromStorage.length; j++) {
            if (arrayFromStorage[j].name === user.name && arrayFromStorage[j].age === user.age &&
                arrayFromStorage[j].status === user.status) {
                return;
            }
        }
        arrayFromStorage.push(user);
        localStorage.setItem("favorites", JSON.stringify(arrayFromStorage));
    }
}

let div = document.createElement("div");

//--------------------------------------------------------------------------------
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let beforeReference = document.createElement("span");
beforeReference.innerText = "If you want to see list of favorites you should click this ";
div.appendChild(beforeReference);

let reference = document.createElement("a");
reference.href = "favorites.html";
reference.innerText = "reference.";
div.appendChild(reference);

document.body.appendChild(div);
// for continue see favorites.js file
