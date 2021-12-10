// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let wrap = document.createElement("div");
wrap.classList.add("wrap", "collapse", "alpha", "beta");
wrap.innerText = "first block"
wrap.style.backgroundColor = "brown";
wrap.style.color = "red";
wrap.style.fontSize = "25px";
document.body.appendChild(wrap);
let wrapCloned = wrap.cloneNode(true);
document.body.appendChild(wrapCloned);

//---------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main','Products','About us','Contacts'];
let menuElements = document.getElementsByClassName("menu");
for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.innerText = array[i];
    menuElements[0].appendChild(li);
}

//---------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement("div");
    div.innerText = coursesAndDurationArray[i].title + " " + coursesAndDurationArray[i].monthDuration;
    document.body.appendChild(div);
}

//---------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement("div");
    div.classList.add("item");
    //
    ////
    let divH1 = document.createElement("h1");
    divH1.innerText = coursesAndDurationArray[i].title;
    div.appendChild(divH1);
    ////
    let divP = document.createElement("p");
    divP.innerText = coursesAndDurationArray[i].monthDuration;
    div.appendChild(divP);
    ////
    //
    document.body.appendChild(div);
}