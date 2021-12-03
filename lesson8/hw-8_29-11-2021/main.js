// - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
console.log(document.getElementById("content"));

// -- отримує текст з блоку з id "rules"
console.log(document.getElementById("rules").innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById("content").innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quidem!";

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById("rules").innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, recusandae."

// -- змініть кожному елементу колір фону на червоний
for (let child of document.children) {
    child.style.backgroundColor = "red";
}

// -- змініть кожному елементу колір тексту на синій
for (let child of document.children) {
    child.style.color = "blue";
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
document.getElementById("rules").classList.forEach(value => console.log(value));

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsWithClassnameFc_rules = document.getElementsByClassName("fc_rules");
for (let element of elementsWithClassnameFc_rules) {
    element.style.color = "red";
}