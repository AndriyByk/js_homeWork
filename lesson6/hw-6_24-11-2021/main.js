// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

//-------------------------------------------------------------------
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1Upper = str1.toUpperCase();
let str2Upper = str2.toUpperCase();
let str3Upper = str3.toUpperCase();
console.log(str1Upper);
console.log(str2Upper);
console.log(str3Upper);

//-------------------------------------------------------------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1Upper1 = 'HELLO WORLD';
let str2Upper2 = 'LOREM IPSUM';
let str3Upper3 = 'JAVASCRIPT IS COOL';

let str1Lower = str1Upper1.toLowerCase();
let str2Lower = str2Upper2.toLowerCase();
let str3Lower = str3Upper3.toLowerCase();
console.log(str1Lower);
console.log(str2Lower);
console.log(str3Lower);

//-------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let strClean = str.trim();
console.log(strClean);

//-------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str_ = 'Каждый охотник желает знать';

function stringToArray(str) {
    return str.split(" ");
}
let arr = stringToArray(str_);
document.writeln(arr);

//-------------------------------------------------------------------
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str__ = 'Каждый охотник желает знать';

function delete_characters(str, length) {
    return str.substr(0, length);
}
document.writeln(delete_characters(str__, 7));

//-------------------------------------------------------------------
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
function insert_dash(str) {
    return str.replaceAll(" ", "-").toUpperCase();
}
let str5 = "HTML JavaScript PHP";
document.writeln(insert_dash(str5)); // 'HTML-JAVASCRIPT-PHP'

//-------------------------------------------------------------------
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function change(str) {
    return str.replace(str[0], str[0].toUpperCase());
}
console.log(change("string string")); // 'HTML-JAVASCRIPT-PHP'

//-------------------------------------------------------------------
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalize(str) {
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        let firstCharacter = array[i][0].toUpperCase();
        let restCharacters = array[i].substr(1);
        array[i] = firstCharacter.concat(restCharacters);
    }
    return array.join(" ");
}
console.log(capitalize("string lorem ipsum javascript is cool dirty string"));
