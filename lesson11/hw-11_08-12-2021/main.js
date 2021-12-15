// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.createElement("form");
form.id = "form";
document.body.appendChild(form);
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "nameInput";
nameInput.classList.add("input");
form.appendChild(nameInput);
let ageInput = document.createElement("input");
nameInput.type = "number";
ageInput.name = "ageInput";
ageInput.classList.add("input");
form.appendChild(ageInput);
let formButton = document.createElement("button");
formButton.innerText = "Send";
formButton.id = "formButton";
document.body.appendChild(formButton);

formButton.onclick = function () {
    let nameValue = document.forms.form.nameInput.value;
    let ageValue = document.forms.form.ageInput.value;
    let lastElementOfLocalStorage = 0;
    if (localStorage.length !== 0) {
        lastElementOfLocalStorage = localStorage.length;
    }
    let object = JSON.stringify({nameValue, ageValue});
    localStorage.setItem(`object${lastElementOfLocalStorage}`, object);
}

//-----------------------------------------------------------------------------
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form1 = document.createElement("form");
form1.id = "form1";
document.body.appendChild(form1);
let modelInput = document.createElement("input");
modelInput.type = "text";
modelInput.name = "modelInput";
modelInput.classList.add("input");
form1.appendChild(modelInput);
let typeInput = document.createElement("input");
typeInput.type = "text";
typeInput.name = "typeInput";
typeInput.classList.add("input");
form1.appendChild(typeInput);
let volumeInput = document.createElement("input");
volumeInput.type = "text";
volumeInput.name = "volumeInput";
volumeInput.classList.add("input");
form1.appendChild(volumeInput);
let form1Button = document.createElement("button");
form1Button.innerText = "Send";
form1Button.id = "form1Button";
document.body.appendChild(form1Button);

form1Button.onclick = function () {
    let modelValue = document.forms.form1.modelInput.value;
    let typeValue = document.forms.form1.typeInput.value;
    let volumeValue = document.forms.form1.volumeInput.value;
    let arrayObject = JSON.stringify([modelValue, typeValue, volumeValue]);

    let lastElementOfLocalStorage = 0;
    if (localStorage.length !== 0) {
        lastElementOfLocalStorage = localStorage.length;
    }
    localStorage.setItem(`arrayObject${lastElementOfLocalStorage}`, arrayObject);
}