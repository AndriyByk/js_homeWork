// - створити функцію яка обчислює та повертає площу прямокутника висотою
function rectangle(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола
function circle(radius) {
    return Math.PI * Math.sqrt(radius);
}

// - створити функцію яка обчислює та повертає площу циліндру
function cylinder(h, radius) {
    return h * Math.PI * Math.sqrt(radius);
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayToConsole(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreation(text) {
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list1(text) {
    document.write("<ul>");
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write("</ul>");
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text, number) {
    document.write("<ul>");
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listCreation(array) {
    document.write("<ul>");
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write("</ul>");
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayOfObjects(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(array[i]['id']);
        document.write(array[i]['name']);
        document.write(array[i]['age']);
    }
}