let bodyOfDefinedUser = document.createElement("div");
bodyOfDefinedUser.id = "bodyOfDefinedUser";
document.body.appendChild(bodyOfDefinedUser);

let objectUser = JSON.parse(localStorage.getItem("user"));

let levelOfRecursion = 0; // for dynamic class-naming of recursioned classes
recForObjects(objectUser, bodyOfDefinedUser);

let userPosts = document.createElement("button");
userPosts.id = "userButton"
userPosts.innerText = "posts of current user";
bodyOfDefinedUser.appendChild(userPosts);

userPosts.onclick = function () {

    let fetchInputFull = `https://jsonplaceholder.typicode.com/users/${objectUser.id}/posts`;
    fetch(fetchInputFull)
        .then(response => response.json())
        .then(posts => {

            let bodyOfPosts = document.createElement("div");
            bodyOfPosts.classList.add("bodyOfPosts");
            document.body.appendChild(bodyOfPosts);

            for (let post of posts) {

                let postShort = document.createElement("div");
                postShort.classList.add("postShort");
                bodyOfPosts.appendChild(postShort);

                let postTitle = document.createElement("div");
                postTitle.innerText = post.title;
                postTitle.classList.add("postTitle");
                postShort.appendChild(postTitle);

                let postButton = document.createElement("button");
                postButton.classList.add("postButton");
                postButton.innerText = "Post details";
                postShort.appendChild(postButton);

                postButton.onclick = function () {
                    localStorage.setItem("post", JSON.stringify(post));
                    location.href = "post-details.html";
                }
            }
        });
    userPosts.disabled = true;
}

// function-recursion for structure of detailed information about user:

function recForObjects (element, path) {
    for (let elementKey in element) {

        let newPath = document.createElement("div");
        newPath.classList.add("user-field" + levelOfRecursion);
        newPath.classList.add("user-field");
        path.appendChild(newPath);

        let elemValue = element[elementKey];

        if (typeof elemValue !== "object") {

            let postFieldName = document.createElement("div");
            postFieldName.innerText = elementKey;
            postFieldName.classList.add("user-field-name");
            newPath.appendChild(postFieldName);

            let postFieldDescription = document.createElement("div");
            postFieldDescription.innerText = elemValue;
            postFieldDescription.classList.add("user-field-description");
            newPath.appendChild(postFieldDescription);

        } else {
            levelOfRecursion++;

            let postFieldName = document.createElement("div");
            postFieldName.innerText = elementKey;
            postFieldName.classList.add("user-field-name");
            newPath.appendChild(postFieldName);

            recForObjects(elemValue, newPath);

            levelOfRecursion--;
        }
    }
}
