let bodyOfWholePost = document.createElement("div");
bodyOfWholePost.classList.add("bodyOfWholePost");
document.body.appendChild(bodyOfWholePost);

let objectPost = JSON.parse(localStorage.getItem("post"));

recForObjectsPost(objectPost, bodyOfWholePost);

fetch(`https://jsonplaceholder.typicode.com/posts/${objectPost.id}/comments`)
    .then(response => response.json())
    .then(comments => {

        let bodyOfComments = document.createElement("div");
        bodyOfComments.classList.add("bodyOfComments");
        document.body.appendChild(bodyOfComments);

        for (let comment of comments) {

            let bodyOfComment = document.createElement("div");
            bodyOfComment.classList.add("bodyOfComment");
            bodyOfComments.appendChild(bodyOfComment);

            recForObjectsComments(comment, bodyOfComment);
        }
    });

// function-recursion for structure of post-info
function recForObjectsPost (element, path) {

    for (let elementKey in element) {

        let newPath = document.createElement("div");
        newPath.classList.add("post-field");
        path.appendChild(newPath);

        let elemValue = element[elementKey];

        if (typeof elemValue !== "object") {

            let postFieldName = document.createElement("div");
            postFieldName.innerText = elementKey;
            postFieldName.classList.add("post-field-name");
            newPath.appendChild(postFieldName);

            let postFieldDescription = document.createElement("div");
            postFieldDescription.innerText = elemValue;
            postFieldDescription.classList.add("post-field-description");
            newPath.appendChild(postFieldDescription);

        } else {
            recForObjectsPost(elemValue, newPath);
        }
    }
}

// function-recursion for structure of comments under defined post
function recForObjectsComments (element, path) {

    for (let elementKey in element) {

        let newPath = document.createElement("div");
        newPath.classList.add("comment-field");
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
            recForObjectsComments(elemValue, newPath);
        }
    }
}