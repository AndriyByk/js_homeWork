// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let array = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// 2. перебрати його циклом for
for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let index = 0;
while (index < array.length) {
    if (index % 2 === 1) {
        console.log(array[index]);
    }
    index++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < array.length; k++) {
    if (k % 2 === 1) {
        console.log(array[k]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let l = 0;
while (l < array.length) {
    if (array[l] % 2 === 0) {
        console.log(array[l]);
    }
    l++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let m = 0; m < array.length; m++) {
    if (array[m] % 2 === 0) {
        console.log(array[m]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let n = 0; n < array.length; n++) {
    if (array[n] % 3 === 0) {
        array[n] = "okten";
    }
}

// 8. вивести масив в зворотньому порядку.
for (let o = array.length-1; o >= 0; o--) {
    console.log(array[o]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
array = [2,17,13,6,22,31,45,66,100,-18];

// 9.1.
i = array.length-1;
while (i >= 0) {
    console.log(array[i]);
    i--;
}

// 9.2.
for (let j = array.length-1; j >= 0; j--) {
    console.log(array[j]);
}

// 9.3.
while (index >= 0) {
    if (index % 2 === 1) {
        console.log(array[index]);
    }
    index--;
}

// 9.4.
for (let k = array.length; k >= 0; k--) {
    if (k % 2 === 1) {
        console.log(array[k]);
    }
}

// 9.5.
while (l >= 0) {
    if (array[l] % 2 === 0) {
        console.log(array[l]);
    }
    l--;
}

// 9.6.
for (let m = array.length; m >= 0; m--) {
    if (array[m] % 2 === 0) {
        console.log(array[m]);
    }
}

// 9.7.
for (let n = array.length; n >= 0; n--) {
    if (array[n] % 3 === 0) {
        array[n] = "okten";
    }
}