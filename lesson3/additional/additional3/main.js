// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let array = [];

// 1.a
for (let i = 0; i < 50; i++) {
    let randomEvenNumber = Math.round(Math.random()*10)*2;
    array.push(randomEvenNumber);
}
console.log(array);

// 1.b
array = [];
for (let i = 0; i < 50; i++) {
    let randomOddNumber = Math.round(Math.random()*10)*2 + 1;
    array.push(randomOddNumber);
}
console.log(array);

// 1.c
array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.random());
}
console.log(array);

// 1.d
array = [];
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.round(Math.random()*(732 - 8) + 8);
    array.push(randomNumber);
}

//-------------------------------------------------------------------
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
        console.log(array[i]);
    }
}

//-------------------------------------------------------------------
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0 && array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

//-------------------------------------------------------------------
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrayOfThirdEvenPartNumbers = [];
for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0 && array[i] % 2 === 0) {
        console.log(array[i]);
        arrayOfThirdEvenPartNumbers.push(array[i]);
    }
}

//-------------------------------------------------------------------
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < array.length; i++) {
    if (array[i + 1] % 2 === 0) {
        console.log(array[i]);
        if (i === array.length - 2) {
            break;
        }
    }
}

//-------------------------------------------------------------------
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
array = [100,250,50,168,120,345,188];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum / array.length);

//-------------------------------------------------------------------
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.round(Math.random()*100));
}
let array2 = [];
for (let arrayElement of array) {
    array2.push(arrayElement * 5);
}

//-------------------------------------------------------------------
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
array = [];
array2 = [];
for (let i = 0; i < 20; i++) {
    let value = Math.round(Math.random()*100);
    if (value < 100/3) {
        array.push(value % 2 === 0);
    } else if (value < 100/3*2) {
        array.push("" + value);
    } else {
        array.push(value);
    }
}
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        array2.push(array[i]);
    }
}
console.log(array);
console.log(array2);

//-------------------------------------------------------------------
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            let user = usersWithId[i];
            user.address = citiesWithId[i];
            usersWithCities.push(user);
        }
    }
}
console.log(usersWithCities);

//-------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.round(Math.random()*100);
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

//-------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
array2 = [];
for (let arrayElement of array) {
    array2.push(arrayElement);
}

//-------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
array = ['a', 'b', 'c'];
let word = "";
for (let i = 0; i < array.length; i++) {
    word += array[i];
}
console.log(word);

//-------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
word = "";
let i = 0;
while (i < array.length) {
    word += array[i];
    i++;
}
console.log(word);

//-------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = "";
for (let string of array) {
    word += string;
}
console.log(word);