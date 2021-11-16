// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let array = [];
for (let i = 0; i < 5; i++) {
    array[i] = i;
}
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let array1 = [];
for (let i = 0; i < 5; i++) {
    array1[i] = "string " + i;
}
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

let array2 = [0,1,"2","3",true];
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

//---------------------------------------------------------------------
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array3 = [];
for (let i = 0; i < 5; i++) {
    array3[i] = i + " - index";
}
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

//-------------------------------------------------------------------------
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>index</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} index</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>index</h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
while (i > 0) {
    document.write(`<h1>${i} index</h1>`);
    i--;
}

//---------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array4 = [0,1,2,3,4,5,6,7,8,9];
for (let j = 0; j < array4.length; j++) {
    console.log(array4[j]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array5 = ["0","1","2","3","4","5","6","7","8","9"];
for (let j = 0; j < array5.length; j++) {
    console.log(array5[j]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array6 = [0,"1",2,"3",4,"5",6,"7",8,"9"];
for (let j = 0; j < array6.length; j++) {
    console.log(array6[j]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array7 = [0,"1",true,3,"4",false,6,"7",true,9];
for (let j = 0; j < array7.length; j++) {
    if (typeof array7 === "boolean")
        console.log(array7[j]);
}

// За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < array7.length; j++) {
    if (typeof array7 === "number")
        console.log(array7[j]);
}

// За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < array7.length; j++) {
    if (typeof array7 === "string")
        console.log(array7[j]);
}

//----------------------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array8 = [];
for (let j = 0; j < 10; j++) {
    if (j%3===0) {
        array8[j] = Math.random() > 0.5;
    } else if (j%2===0) {
        array8[j] = "index: " + j;
    } else {
        array8[j] = j;
    }
}
for (let j = 0; j < array8.length; j++) {
    console.log(array8[j]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(" " + j);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(" " + j);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 200; j+=2) {
    console.log(j);
    document.write(" " + j);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(" " + j);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j % 2 === 1) {
        console.log(j);
        document.write(" " + j);
    }
}