//-------------------------------------------------------------
// - Дано натуральное число n. Выведите все числа от 1 до n.
let a = Math.round(Math.random()*100);
for (let i = 0; i <= a; i++) {
    console.log(i);
}

//--------------------------------------------------------------
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const A = Math.round(Math.random()*30);
const B = Math.round(Math.random()*30);
if (A < B) {
    for (let i = A; i <= B; i++)
        console.log(i);
} else if (A > B) {
    for (let i = A; i >= B; i--)
        console.log(i);
}

//--------------------------------------------------------------
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
function foo(array, i) {
    if (i < array.length-1) {
        let g = array[i];
        array[i] = array[i + 1];
        array[i + 1] = g;
    }
}

let array = [9,8,0,4];
foo(array, 0);
console.log(array);
array = [9,8,0,4];
foo(array, 1);
console.log(array);
array = [9,8,0,4];
foo(array, 2);
console.log(array);

//---------------------------------------------------------
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let lengthMin = 2;
let lengthMax = 100;
let quantity = Math.round(Math.random()*(lengthMax - lengthMin) + lengthMin);
array = [];
for (let i = 0; i < quantity; i++) {
    array.push(Math.floor(Math.random()*10));
}

function f(array) {
    for (let i = 0, j = array.length - 1; i < j; i++) {
        if (array[i] === 0) {
            for (let l = i; l < j; l++) {
                array[l] = array[l + 1];
            }
            if (array[i] === 0) {
                i--;
            }
            array[j] = 0;
            j--;
        }
    }
}

console.log(array);
f(array);
console.log(array);
