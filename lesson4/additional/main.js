// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує
//   їх між собою.
function f1() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    }
}
let la = "la";
f1(la);
let lala = "lala";
f1(la, lala);

//---------------------------------------------------------------------------------
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
//   результуючий масив.
//     EXAMPLE:
//         [1,2,3,4]
//         [2,3,4,5]
//     результат
//         [3,5,7,9]
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
function f2(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (j === i) {
                array3.push(array1[i] + array2[j]);
            }
        }
    }
    return array3;
}
console.log(f2(arr1, arr2));

//---------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//     EXAMPLE:
//         [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let a = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function f3(objects) {
    let array = [];
    for (let object of objects) {
        for (let objectKey in object) {
            array.push(objectKey);
        }
    }
    return array;
}
console.log(f3(a));

//---------------------------------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//     EXAMPLE:
//         [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function f4(objects) {
    let array = [];
    for (let object of objects) {
        for (let objectElement in object) {
            array.push(object[objectElement]);
        }
        // for (let objectKey in object) {
        //     array.push(objectKey.valueOf())
        //     // array.push(object.valueOf(objectKey));
        // }
    }
    return array;
}
console.log(f4(a));