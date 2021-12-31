// 1.
// Отримати відповідь з цього ресурсу та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

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

            recForUsers(users[i], bodyOfUser);

            let userButton = document.createElement("button");
            userButton.innerText = "All posts";
            userButton.classList.add("userButton");
            bodyOfUser.appendChild(userButton);

            userButton.onclick = function () {
                userButton.onclick = function () {
                    let blockForRemoving = document.getElementById("bodyOfPosts" + i);
                    blockForRemoving.classList.toggle("hidden");
                }

                fetch(`https://jsonplaceholder.typicode.com/users/${users[i].id}/posts`)
                    .then(response => response.json())
                    .then(posts => {

                        let bodyOfPosts = document.createElement("div");
                        bodyOfPosts.classList.add("bodyOfPosts");
                        bodyOfPosts.id = "bodyOfPosts" + i;
                        bodyOfUser.appendChild(bodyOfPosts);

                        for (let j = 0; j < posts.length; j++) {

                            let bodyOfPost = document.createElement("div");
                            bodyOfPost.classList.add("bodyOfPost");
                            bodyOfPosts.appendChild(bodyOfPost);

                            recForPosts(posts[j], bodyOfPost);

                            let postButton = document.createElement("button");
                            postButton.innerText = "All comments";
                            postButton.classList.add("postButton");
                            bodyOfPost.appendChild(postButton);

                            postButton.onclick = function () {

                                postButton.onclick = function () {

                                    let blockForRemoving = document.getElementById("bodyOfComments" + j);
                                    blockForRemoving.classList.toggle("hidden");
                                }

                                fetch(`https://jsonplaceholder.typicode.com/posts/${posts[j].id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {

                                        let bodyOfComments = document.createElement("div");
                                        bodyOfComments.classList.add("bodyOfComments");
                                        bodyOfComments.id = "bodyOfComments" + j;
                                        bodyOfPost.appendChild(bodyOfComments);

                                        for (let comment of comments) {

                                            let bodyOfComment = document.createElement("div");
                                            bodyOfComment.classList.add("bodyOfComment");
                                            bodyOfComments.appendChild(bodyOfComment);

                                            recForObjectsComments(comment, bodyOfComment);
                                        }
                                    });
                            }
                        }
                    });

            }
        }
    });

let levelOfUserRecursion = 0;
function recForUsers (element, path) {
    for (let elementKey in element) {

        let newPath = document.createElement("div");
        newPath.classList.add("user-field"  + levelOfUserRecursion);
        newPath.classList.add("user-field");
        path.appendChild(newPath);

        let elemValue = element[elementKey];

        if (typeof elemValue !== "object") {

            let userFieldName = document.createElement("div");
            userFieldName.innerText = elementKey;
            userFieldName.classList.add("user-field-name");
            newPath.appendChild(userFieldName);

            let userFieldDescription = document.createElement("div");
            userFieldDescription.innerText = elemValue;
            userFieldDescription.classList.add("user-field-description");
            newPath.appendChild(userFieldDescription);

        } else {
            levelOfUserRecursion++;

            let userFieldName = document.createElement("div");
            userFieldName.innerText = elementKey;
            userFieldName.classList.add("user-field-name");
            newPath.appendChild(userFieldName);

            recForUsers(elemValue, newPath);

            levelOfUserRecursion--;
        }
    }
}

let levelOfPostRecursion = 0;
function recForPosts(element, path) {
    for (let elementKey in element) {

        let newPath = document.createElement("div");
        newPath.classList.add("post-field");
        newPath.classList.add("post-field" + levelOfPostRecursion);

        path.appendChild(newPath);

        let elemValue = element[elementKey];

        if (typeof elemValue !== "object") {

            let userFieldName = document.createElement("div");
            userFieldName.innerText = elementKey;
            userFieldName.classList.add("post-field-name");
            newPath.appendChild(userFieldName);

            let userFieldDescription = document.createElement("div");
            userFieldDescription.innerText = elemValue;
            userFieldDescription.classList.add("post-field-description");
            newPath.appendChild(userFieldDescription);

        } else {
            levelOfPostRecursion++;

            let userFieldName = document.createElement("div");
            userFieldName.innerText = elementKey;
            userFieldName.classList.add("post-field-name");
            newPath.appendChild(userFieldName);

            recForPosts(elemValue, newPath);

            levelOfPostRecursion--;
        }
    }
}

let levelOfCommentRecursion = 0;
function recForObjectsComments (element, path) {

    for (let elementKey in element) {

        let newPath = document.createElement("div");
        newPath.classList.add("comment-field");
        newPath.classList.add("comment-field" + levelOfCommentRecursion);
        path.appendChild(newPath);

        let elemValue = element[elementKey];

        if (typeof elemValue !== "object") {

            let postFieldName = document.createElement("div");
            postFieldName.innerText = elementKey;
            postFieldName.classList.add("comment-field-name");
            newPath.appendChild(postFieldName);

            let postFieldDescription = document.createElement("div");
            postFieldDescription.innerText = elemValue;
            postFieldDescription.classList.add("comment-field-description");
            newPath.appendChild(postFieldDescription);

        } else {
            levelOfCommentRecursion++;

            let postFieldName = document.createElement("div");
            postFieldName.innerText = elementKey;
            postFieldName.classList.add("comment-field-name");
            newPath.appendChild(postFieldName);

            recForObjectsComments(elemValue, newPath);

            levelOfCommentRecursion--;
        }
    }
}