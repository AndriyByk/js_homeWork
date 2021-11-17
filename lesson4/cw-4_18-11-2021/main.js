// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
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

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a, b, c) {
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

// - створити функцію яка повертає найбільше число з масиву
function maxOfArray(array) {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

// - створити функцію яка повертає найменьше число з масиву
function minOfArray(array) {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(array) {
    let mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean += array[i];
    }
    mean /=array.length;
    return mean;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function func() {
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

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomTen() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random()*100);
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomNumber(limit) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.round(Math.random() * limit);
    }
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arrayReverse(array) {
    let variable;
    for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
        variable = array[j];
        array[j] = array[i];
        array[i] = variable;
    }
}