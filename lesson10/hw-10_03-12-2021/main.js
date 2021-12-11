// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".

let htmlDivElement = document.createElement("div");
htmlDivElement.id = "text";
htmlDivElement.innerText = "htmlDivElement";
document.body.appendChild(htmlDivElement);

let button = document.createElement("button");
button.id = "btn";
button.innerText = "magic button";
document.body.appendChild(button);

button.onclick = function () {
    htmlDivElement.style.display = "none";
}

//----------------------------------------------------------
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button1 = document.createElement("button");
button1.id = "btn1";
button1.innerText = "magic button - 2";
document.body.appendChild(button1);

button1.onclick = function () {
    button1.style.display = "none";
}

//----------------------------------------------------------
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement("form");
form.id = "form1";
document.body.appendChild(form);

let input = document.createElement("input");
input.type = "number";
input.name = "age";
form.appendChild(input);

let button3 = document.createElement("button");
button3.innerText = "validation"
form.appendChild(button3);

let form1 = document.forms.form1;
form1.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    if (age >= 18) {
        alert("you are 18 years old or older");
    } else {
        alert("you are less then 18 years old");
    }
}

//----------------------------------------------------------
// - Создайте меню, которое раскрывается/сворачивается при клике
let menuElement = document.createElement("div");
menuElement.id = "menuElement";
document.body.appendChild(menuElement);
let zeroElementOfMenu = document.createElement("button");
zeroElementOfMenu.innerText = "MENU";
zeroElementOfMenu.classList.add("zeroElementOfMenu");
menuElement.appendChild(zeroElementOfMenu);
let firstElementOfMenu = document.createElement("div");
firstElementOfMenu.innerText = "firstElementOfMenu";
firstElementOfMenu.classList.add("elementOfMenu");
menuElement.appendChild(firstElementOfMenu);
let secondElementOfMenu = document.createElement("div");
secondElementOfMenu.innerText = "secondElementOfMenu";
secondElementOfMenu.classList.add("elementOfMenu");
menuElement.appendChild(secondElementOfMenu);
let thirdElementOfMenu = document.createElement("div");
thirdElementOfMenu.innerText = "thirdElementOfMenu";
thirdElementOfMenu.classList.add("elementOfMenu");
menuElement.appendChild(thirdElementOfMenu);

zeroElementOfMenu.onclick = function () {
    firstElementOfMenu.classList.toggle("shown");
    secondElementOfMenu.classList.toggle("shown");
    thirdElementOfMenu.classList.toggle("shown");
}

//----------------------------------------------------------
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let arrayOfComments = [
    {
        title: 'lorem',
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque placeat quaerat quos reprehenderit repudiandae velit? Deserunt et harum quaerat sit soluta! Consequuntur eum excepturi fuga impedit iure, labore natus nemo nisi odio quae, saepe sed sint suscipit tempora ullam. Dicta excepturi quo quos recusandae rerum. A aperiam cum delectus dignissimos dolore eligendi fugit illo impedit, iste iure minima modi molestias perspiciatis placeat praesentium quam quod quos reiciendis reprehenderit similique sunt tempora voluptas? Illum incidunt labore recusandae rem sint tempora voluptatum? Aliquam eos facilis ipsa ipsum magni reiciendis repellendus ut voluptates! Aliquam consectetur delectus earum minus neque obcaecati, quo repellat."
    }, {
        title: 'ipsum',
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque placeat quaerat quos reprehenderit repudiandae velit? Deserunt et harum quaerat sit soluta! Consequuntur eum excepturi fuga impedit iure, labore natus nemo nisi odio quae, saepe sed sint suscipit tempora ullam. Dicta excepturi quo quos recusandae rerum. A aperiam cum delectus dignissimos dolore eligendi fugit illo impedit, iste iure minima modi molestias perspiciatis placeat praesentium quam quod quos reiciendis reprehenderit similique sunt tempora voluptas? Illum incidunt labore recusandae rem sint tempora voluptatum? Aliquam eos facilis ipsa ipsum magni reiciendis repellendus ut voluptates! Aliquam consectetur delectus earum minus neque obcaecati, quo repellat."
    }, {
        title: 'dolo',
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque placeat quaerat quos reprehenderit repudiandae velit? Deserunt et harum quaerat sit soluta! Consequuntur eum excepturi fuga impedit iure, labore natus nemo nisi odio quae, saepe sed sint suscipit tempora ullam. Dicta excepturi quo quos recusandae rerum. A aperiam cum delectus dignissimos dolore eligendi fugit illo impedit, iste iure minima modi molestias perspiciatis placeat praesentium quam quod quos reiciendis reprehenderit similique sunt tempora voluptas? Illum incidunt labore recusandae rem sint tempora voluptatum? Aliquam eos facilis ipsa ipsum magni reiciendis repellendus ut voluptates! Aliquam consectetur delectus earum minus neque obcaecati, quo repellat."
    }, {
        title: 'sit',
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque placeat quaerat quos reprehenderit repudiandae velit? Deserunt et harum quaerat sit soluta! Consequuntur eum excepturi fuga impedit iure, labore natus nemo nisi odio quae, saepe sed sint suscipit tempora ullam. Dicta excepturi quo quos recusandae rerum. A aperiam cum delectus dignissimos dolore eligendi fugit illo impedit, iste iure minima modi molestias perspiciatis placeat praesentium quam quod quos reiciendis reprehenderit similique sunt tempora voluptas? Illum incidunt labore recusandae rem sint tempora voluptatum? Aliquam eos facilis ipsa ipsum magni reiciendis repellendus ut voluptates! Aliquam consectetur delectus earum minus neque obcaecati, quo repellat."
    }, {
        title: 'ameti',
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque placeat quaerat quos reprehenderit repudiandae velit? Deserunt et harum quaerat sit soluta! Consequuntur eum excepturi fuga impedit iure, labore natus nemo nisi odio quae, saepe sed sint suscipit tempora ullam. Dicta excepturi quo quos recusandae rerum. A aperiam cum delectus dignissimos dolore eligendi fugit illo impedit, iste iure minima modi molestias perspiciatis placeat praesentium quam quod quos reiciendis reprehenderit similique sunt tempora voluptas? Illum incidunt labore recusandae rem sint tempora voluptatum? Aliquam eos facilis ipsa ipsum magni reiciendis repellendus ut voluptates! Aliquam consectetur delectus earum minus neque obcaecati, quo repellat."
    }];
let comments = document.createElement("div");
comments.id = "comment";
document.body.appendChild(comments);

for (let i = 0; i < arrayOfComments.length; i++) {
    let commentElement = document.createElement("div");
    commentElement.classList.add("commentElement");

    let commentElementTitle = document.createElement("h2");
    commentElementTitle.classList.add("commentElementTitle");
    commentElementTitle.innerText = arrayOfComments[i].title;
    commentElement.appendChild(commentElementTitle);

    let commentElementButton = document.createElement("button");
    commentElementButton.id = "commentElementButton" + "-" + i;
    commentElementButton.innerText = "Button for body";
    commentElement.appendChild(commentElementButton);

    let commentElementBody = document.createElement("p");
    commentElementBody.id = "commentElementBody" + i;
    commentElementBody.innerText = arrayOfComments[i].body;
    commentElement.appendChild(commentElementBody);

    comments.appendChild(commentElement);
}

for (let i = 0; i < arrayOfComments.length; i++) {
    let elementClicked = document.getElementById(`commentElementButton-${i}`);
    elementClicked.onclick = function () {
        let element = document.getElementById(`commentElementBody${i}`);
        element.classList.toggle("shorting");
    }
}
