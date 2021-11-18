// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//-----------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// arrow function
let min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        if ((a < c && a === b) || (a < b && a === c )) {
            console.log(a);
        } else if (b < a && b === c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
min(1,2,3);

// self-invoking function
(function (a,b,c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        if ((a < c && a === b) || (a < b && a === c )) {
            console.log(a);
        } else if (b < a && b === c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}(1,2,3));

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// arrow function
let max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    } else {
        if ((a > c && a === b) || (a > b && a === c )) {
            console.log(a);
        } else if (b > a && b === c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
max (1,2,3);

// self-invoking function
(function (a,b,c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    } else {
        if ((a > c && a === b) || (a > b && a === c )) {
            console.log(a);
        } else if (b > a && b === c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}(1,2,3))

//-----------------------------------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву

// arrow function
let array = [1, 2, 3];
let maxOfArray = (array) => {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}
console.log(maxOfArray(array));

// self-invoking function
(function (array) {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}(array));

//-----------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву

// arrow function
let minOfArray = (array) => {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}
console.log(minOfArray(array));

// self-invoking function
(function (array) {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}(array));

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// arrow function
let sumOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfArray(array));

// self-invoking function
(function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}(array));

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// arrow function
let arithmeticMean = (array) => {
    let mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean += array[i];
    }
    mean /=array.length;
    return mean;
}
console.log(arithmeticMean(array));

// self-invoking function
(function (array) {
    let mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean += array[i];
    }
    mean /=array.length;
    return mean;
}(array));

//-----------------------------------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// arrow function
let func = () => {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}

// self-invoking function
(function () {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
    return min;
}(1,2,3,4,5,6,7,90));

//-----------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// arrow function
let randomTen = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random()*100);
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
randomTen();

// self-invoking function
(function () {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random()*100);
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}());

//-----------------------------------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// arrow function
let randomNumber = (limit) => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
}
randomNumber(60);

// self-invoking function
(function (limit) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
}(60));

//-----------------------------------------------------------------------------------
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// arrow function
let arrayReverse = (array) => {
    let variable;
    for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
        variable = array[j];
        array[j] = array[i];
        array[i] = variable;
    }
}
arrayReverse(array);

// self-invoking function
(function (array) {
    let variable;
    for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
        variable = array[j];
        array[j] = array[i];
        array[i] = variable;
    }
}(array));