// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//-----------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника висотою

//arrow function
let rectangle = (a, b) => a * b;
console.log(rectangle(4, 5));

// self-invoking function
(function (a, b) {
    return a * b;
}(4,5));

//-----------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола

//arrow function
let circle = (radius) => Math.PI * Math.sqrt(radius);
console.log(circle(5));

// self-invoking function
(function (radius) {
    return Math.PI * Math.sqrt(radius);
}(5));

//-----------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру

//arrow function
let cylinder = (h, radius) => h * Math.PI * Math.sqrt(radius);
console.log(cylinder(5,3));

// self-invoking function
(function (h, radius) {
    return h * Math.PI * Math.sqrt(radius);
}(5, 3))

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [4,"5",true];

//arrow function
let arrayToConsole = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
arrayToConsole(array);

// self-invoking function
(function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}(array));

//-----------------------------------------------------------------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//arrow function
let paragraphCreation = (text) => document.write(`<p>${text}</p>`);
paragraphCreation("error");

// self-invoking function
(function (text) {document.write(`<p>${text}</p>`)}("error"));

//-----------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//arrow function
let list1 = (text) => {
    document.write("<ul>");
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write("</ul>");
}
list1("error");

// self-invoking function
(function (text) {
    document.write("<ul>");
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write("</ul>");
}("error"));

//-----------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//arrow function
let list2 = (text, number) => {
    document.write("<ul>");
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}
list2("lalala", 3);

// self-invoking function
(function (text, number) {
    document.write("<ul>");
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}("lalala", 3));

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//arrow function
let listCreation = (array) => {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write("</ul>");
}
listCreation(array);

// self-invoking function
(function (array) {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write("</ul>");
}(array));

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array1 = [{
    id: 1,
    name: "name1",
    age: 31
}, {
    id: 2,
    name: "name2",
    age: 30
},{
    id: 3,
    name: "name3",
    age: 25
},{
    id: 4,
    name: "name4",
    age: 26
},{
    id: 5,
    name: "name5",
    age: 45
}];

//arrow function
let arrayOfObjects = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write('<div>');
        document.write(array[i]['id']);
        document.write(array[i]['name']);
        document.write(array[i]['age']);
        document.write('</div>');

    }
}
arrayOfObjects(array1);

// self-invoking function
(function (array) {
    for (let i = 0; i < array.length; i++) {
        document.write('<div>');
        document.write(array[i].id);
        document.write(array[i].name);
        document.write(array[i].age);
        document.write('</div>');
    }
}(array1));