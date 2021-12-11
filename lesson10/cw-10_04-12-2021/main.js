// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
//   інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement("form");
form1.id = "form1";
document.body.appendChild(form1);
let inputFirstOfForm1 = document.createElement("input");
inputFirstOfForm1.type = "text";
inputFirstOfForm1.name = "inputFirstOfForm1";
form1.appendChild(inputFirstOfForm1);
let inputSecondOfForm1 = document.createElement("input");
inputSecondOfForm1.type = "number";
inputSecondOfForm1.name = "inputSecondOfForm1";
form1.appendChild(inputSecondOfForm1);

let form2 = document.createElement("form");
form2.id = "form2";
document.body.appendChild(form2);
let inputFirstOfForm2 = document.createElement("input");
inputFirstOfForm2.type = "text";
inputFirstOfForm2.name = "inputFirstOfForm2";
form2.appendChild(inputFirstOfForm2);
let inputSecondOfForm2 = document.createElement("input");
inputSecondOfForm2.type = "number";
inputSecondOfForm2.name = "inputSecondOfForm2";
form2.appendChild(inputSecondOfForm2);

let button = document.createElement("button");
button.id = "button";
button.innerText = "But;)";
document.body.appendChild(button);

button.onclick = function () {
    console.log(document.forms.form1.inputFirstOfForm1.value);
    console.log(document.forms.form1.inputSecondOfForm1.value);
    console.log(document.forms.form2.inputFirstOfForm2.value);
    console.log(document.forms.form2.inputSecondOfForm2.value);
}

//----------------------------------------------------------
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додатковачастина для завдання)

// let form3 = document.createElement("form");
// form3.id = "form3";
// document.body.appendChild(form3);
//
// let inputFirstOfForm3 = document.createElement("input");
// inputFirstOfForm3.type = "text";
// inputFirstOfForm3.name = "inputFirstOfForm3";
// form1.appendChild(inputFirstOfForm3);
//
// let inputSecondOfForm3 = document.createElement("input");
// inputSecondOfForm3.type = "text";
// inputSecondOfForm3.name = "inputSecondOfForm3";
// form1.appendChild(inputSecondOfForm3);
//
// let inputThirdOfForm3 = document.createElement("input");
// inputThirdOfForm3.type = "text";
// inputThirdOfForm3.name = "inputThirdOfForm3";
// form1.appendChild(inputThirdOfForm3);
//
// let button1 = document.createElement("button");
// button1.id = "button";
// button1.innerText = "But;)";
// document.body.appendChild(button1);

//----------------------------------------------------------
//     Task 1
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

//     Task 2
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptates.".toLowerCase();
let array = string
    .split(",").map(value => value.trim()).join(" ")
    .split(".").map(value => value.trim()).join(" ")
    .split(" ");
array = array.filter(item => item.length > 0);
console.log(array);

let form = document.createElement("form");
form.id = "form";
form.name = "formName";
document.body.appendChild(form);

let inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "inputElement";
form.appendChild(inputElement);

let button2 = document.createElement("button");
button2.id = "button2";
button2.innerText = "button2";
form.appendChild(button2);

let form4 = document.forms.form;
form4.onsubmit = function (e) {
    e.preventDefault();
    let lexis = this.inputElement.value;
    for (let string1 of array) {
        if (/* Task 1 -> */(string1 === lexis) || /* Task 2 -> */(lexis.includes(string1))) {
            alert("please! Be cultural greek person not gopnik from Imperium Romanum!");
        }
    }
}

