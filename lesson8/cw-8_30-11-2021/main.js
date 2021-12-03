// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById("main_header").classList.add("sep-2021-java");

// b) робить шириниу елементу ul 400px
let ulList = document.getElementsByTagName("ul");
for (let ulListElement of ulList) {
    ulListElement.style.width = "400px";
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elementsByClassName_linkList = document.getElementsByClassName("linkList");
for (let linkListElement of elementsByClassName_linkList) {
    linkListElement.style.width = "50%";
}

// d) отримує текст який зберігається в елементі з класом listElement2
let elementsByClassName_listElement2 = document.getElementsByClassName("listElement2");
let textOfClass_listElement2 = elementsByClassName_listElement2[0].textContent;
console.log(textOfClass_listElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let elementsByTagName = document.getElementsByTagName("li");
for (let element of elementsByTagName) {
    element.style.backgroundColor = "grey";
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsByTagName1 = document.getElementsByTagName("a");
for (let elem of elementsByTagName1) {
    elem.classList.add("anchor");
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aElements = document.getElementsByTagName("a");
for (let element of aElements) {
    if (element.innerText === "link3") {
        element.style.fontSize = "40px";
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElements1 = document.getElementsByTagName("a");
for (let element of aElements1) {
    element.classList.add(`element_${element.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let elementsByClassName = document.getElementsByClassName("sub-header");
for (let element of elementsByClassName) {
    element.style.backgroundColor = prompt("Введіть колір фону:");
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let elementsByClassName1 = document.getElementsByClassName("sub-header");
for (let element of elementsByClassName1) {
    if (element.innerText === "content 2 segment") {
        element.style.color = prompt("Введіть колір тексту:");
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elementsByClassName2 = document.getElementsByClassName("content_1");
elementsByClassName2[0].textContent = prompt("Введіть текст:");

// l) отримати елементи p та змінити їм padding на 20px
let elementsByTagName_P = document.getElementsByTagName("p");
for (let element of elementsByTagName_P) {
    element.style.padding = "20px";
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsByClassNameText2 = document.getElementsByClassName("text2");
for (let element of elementsByClassNameText2) {
    element.innerText = "sep-2021";
}