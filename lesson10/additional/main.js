// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (event) {
//     let element = event.target;
//
//     console.log("Tag name of element: \n" + element.tagName.toLowerCase());
//
//     element.classList.forEach(clas => console.log("Class name of element: \n" + clas));
//     if (element.id !== "") {
//         console.log("Element id: \n" + element.id);
//     }
//
//     console.log("Height * Width: \n" + element.clientHeight + " * " + element.clientWidth);
//     console.log("///////////////////")
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onmousedown = function (event) {
//     let element = event.target;
//
//     // creating info-box
//     let popup = document.createElement("div");
//     popup.classList.toggle("positionAbsolute");
//     element.parentElement.insertBefore(popup, element.nextSibling);
//
//     // tag
//     let popupNameOfTag = document.createElement("div");
//     popupNameOfTag.innerText = "Tag name of element:\n" + element.tagName.toLowerCase();
//     popup.appendChild(popupNameOfTag);
//
//     // classes
//     let popupListOfClassesString = ["List of classes:\n"];
//     element.classList.forEach(clas => popupListOfClassesString.push(clas));
//
//     let popupListOfClasses = document.createElement("div");
//     popupListOfClasses.innerText = popupListOfClassesString.join(" ");
//     popup.appendChild(popupListOfClasses);
//
//     // id
//     if (element.id !== "") {
//         let popupId = document.createElement("div");
//         popupId.innerText = "Element id: \n" + element.id;
//         popup.appendChild(popupId);
//     }
//
//     // sizes
//     let popupSizesOfElement = document.createElement("div");
//     popupSizesOfElement.innerText = "Height * Width: \n" + element.clientHeight + " * " + element.clientWidth;
//     popup.appendChild(popupSizesOfElement);
//
//     // creating style-element with appropriate class-attributes for info-box
//     let hiddenClassCSS = document.createElement("style");
//     hiddenClassCSS.innerHTML += ".positionAbsolute {position: absolute; background-color: #dede81; border: black solid 1px;}.hidden {display: none;}";
//     document.head.appendChild(hiddenClassCSS);
//
//     // manipulating with disappearing of info-box
//     let hiddenList = document.getElementsByClassName("hidden");
//     for (let hidden of hiddenList) {
//         hidden.remove();
//     }
//
//     element.onmouseup = function () {
//         popup.classList.add("hidden");
//     }
// }

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан