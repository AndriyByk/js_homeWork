// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
function normalizer(str, symb) {
    if (str.includes(symb)) {
        let array = str.split(symb);
        let arrayClear = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].length !== 0) {
                arrayClear.push(array[i]);
            }
        }
        return arrayClear.join(" ");
    }
}
console.log(normalizer(n1,'.'));
console.log(normalizer(n2, "-"));
console.log(normalizer(n3, "_"));

//-----------------------------------------------------------------------------
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomTenToHundred() {
    let arrayOfNumbers = [];
    for (let i = 0; i < 10; i++) {
        arrayOfNumbers.push(Math.round(Math.random() * 100));
    }
    return arrayOfNumbers;
}
console.log(randomTenToHundred());

//-----------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arrayOfNumbers = randomTenToHundred();
let array = arrayOfNumbers.sort((a, b) => {
    return a - b;
});
console.log(array);

//-----------------------------------------------------------------------------
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arrayOfNumbers1 = randomTenToHundred();
let array1 = arrayOfNumbers1.filter((item) => {
    return item % 2 === 0;
});
console.log(array1);

//-----------------------------------------------------------------------------
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayOfNumbers2 = randomTenToHundred();
let array2 = arrayOfNumbers2.map(value => value + "");
console.log(array2);

//-----------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
function sortNums(array, direction) {
    if (direction === "ascending") {
        return array.sort(((a, b) => {
            return a - b;
        }));
    } else if (direction === "descending") {
        return array.sort(((a, b) => {
            return b - a;
        }));
    }
}
let nums = [11,21,3];
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]

//-----------------------------------------------------------------------------
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedArray = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sortedArray);

let filteredArray = coursesAndDurationArray.filter(value => {
   return value.monthDuration > 5;
});
console.log(filteredArray);

//-----------------------------------------------------------------------------
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// standard
function cutString(str, n) {
    let array = [];
    let length = str.length;
    for (let i = 0; i < length / n; i++) {
        array.push(str.substr(0, n));
        str = str.substr(n);
    }
    return array;
}
console.log(cutString('наслаждение',3)); // [нас,лаж,ден,ие]

// with use of recursion
function cutStringRecursion(str, n) {
    let array = [];
    let length = str.length;
    let i = 0;
    rec(str, n);

    function rec (str, n) {
        array.push(str.substr(0, n));
        i++;
        if (i < length / n) {
            str = str.substr(n);
            rec(str, n);
        }
        return array;
    }

    return array;
}
console.log(cutStringRecursion('наслаждение',3)); // [нас,лаж,ден,ие]
