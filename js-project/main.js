fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        let bodyOfUsers = document.createElement("div");
        bodyOfUsers.id = "bodyOfUsers";
        document.body.appendChild(bodyOfUsers);

        for (let i = 0; i < users.length; i++) {

            let bodyOfUser = document.createElement("div");
            bodyOfUser.classList.add("bodyOfUser");
            bodyOfUsers.appendChild(bodyOfUser);

            let nameOfUser = document.createElement("div");
            nameOfUser.innerText = users[i].name;
            nameOfUser.classList.add("name");
            bodyOfUser.appendChild(nameOfUser);

            let usernameOfUser = document.createElement("div");
            usernameOfUser.innerText = "username: " + users[i].username;
            usernameOfUser.classList.add("username");
            bodyOfUser.appendChild(usernameOfUser);

            let emailOfUser = document.createElement("div");
            emailOfUser.innerText = "email: " + users[i].email;
            emailOfUser.classList.add("email");
            bodyOfUser.appendChild(emailOfUser);

            let userButton = document.createElement("button");
            userButton.id = `userButton${i}`;
            userButton.classList.add("userButton");
            userButton.innerText = "Details";
            bodyOfUser.appendChild(userButton);

            userButton.onclick = function () {
                localStorage.setItem("user", JSON.stringify(users[i]));
                location.href = "user-details.html";
            }
        }
    });
