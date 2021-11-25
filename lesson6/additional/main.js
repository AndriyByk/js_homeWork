// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
//     равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не
//     чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.

function validator(string) {
    // if (!string.includes("@"))
    //     return false;
    let existenceOfAt = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "@") {
            existenceOfAt = true;
            break;
        }
    }
    if (existenceOfAt === false) {
        return false;
    }
    let partsAroundAt = string.split("@");
    if (partsAroundAt[0].length === 0 || partsAroundAt[1].length === 0) {
        return false;
    }
    // if (!partsAroundAt[1].includes("."))
    //     return false;
    let existenceOfDot = false;
    for (let i = 0; i < partsAroundAt[1].length; i++) {
        if (partsAroundAt[1][i] === ".") {
            existenceOfDot = true;
            break;
        }
    }
    if (existenceOfDot === false) {
        return false;
    }
    let partsAroundDot = partsAroundAt[1].split(".");
    return !(partsAroundDot[0].length === 0 || partsAroundDot[1].length < 2);
}
console.log(validator("someemail@gmail.com"));
console.log(validator("someeMAIL@gmail.com"));
console.log(validator("someeMAIL@i.ua"));
console.log(validator("some.email@gmail.com"));

console.log(validator("someeMAILgmail.com"));
console.log(validator("someeMAIL@.com"));
console.log(validator("someeMAIL@gmail.m"));
console.log(validator("@gmail.com"));
console.log(validator("someeMAIL@gmailcom"));


//------------------------------------------------------------------------------
// - є масив let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
function sorting(array) {
    array.sort((a, b) => b.modules.length - a.modules.length);
}
sorting(coursesArray);
console.log(coursesArray);

//------------------------------------------------------------------------------
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
function count(str, stringSearch) {
    let quantity = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringSearch) {
            quantity++;
        }
    }
    return quantity;
}
let symb = "о";
let str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb));// 5

//------------------------------------------------------------------------------
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
function cutString(str, n) {
    let array = str.split(" ");
    str = "";
    for (let i = 0; i < n; i++) {
        str += (array[i]) + " ";
    }
    return str.trim();
}
let string = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(string, 5)) // 'Сила тяжести приложена к центру'