let title = document.createElement("h1");
title.innerText = "Your favorites: ";
document.body.appendChild(title);
if (localStorage.getItem("favorites") !== null) {
    let array = JSON.parse(localStorage.getItem("favorites"));
    for (let i = 0; i < array.length; i++) {
        let favoriteElement = document.createElement("div");
        favoriteElement.innerText = array[i].name + " " + array[i].age + " " + array[i].status;
        document.body.appendChild(favoriteElement);
    }
}
// button for clearing list
let clearButton = document.createElement("button");
clearButton.innerText = "Clear list";
document.body.appendChild(clearButton);
clearButton.onclick = function () {
    localStorage.clear();
    location.reload();
}
// button for returning back to index.html
let backButton = document.createElement("button");
backButton.innerText = "back->";
document.body.appendChild(backButton);
backButton.onclick = function () {
    location.href = "index.html";
}
