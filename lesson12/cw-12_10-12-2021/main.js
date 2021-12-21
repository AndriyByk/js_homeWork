// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        let body = document.createElement("div");
        body.classList.add("bodyOfPosts");
        document.body.appendChild(body);

        for (let post of posts) {

            //   build structure of posts
            let divPost = document.createElement("div");
            divPost.classList.add("post");                                                    body.appendChild(divPost);
                                                                                              for (let elementKey in post) {

                let newPath = document.createElement("div");
                newPath.classList.add("post-field");
                divPost.appendChild(newPath);

                let elemValue = post[elementKey];

                let postFieldName = document.createElement("div");
                postFieldName.innerText = elementKey;
                postFieldName.classList.add("post-field-name");
                newPath.appendChild(postFieldName);

                let postFieldDescription = document.createElement("div");
                postFieldDescription.innerText = elemValue;                                       postFieldDescription.classList.add("post-field-description");                     newPath.appendChild(postFieldDescription);                                    }

            //   add button
            let postButton = document.createElement("button");
            postButton.innerText = "Posts";
            postButton.classList.add("postButton");
            divPost.appendChild(postButton);

            //   take comments
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json())
                .then(comments => {

                    let bodyOfComments = document.createElement("div");
                    bodyOfComments.classList.add("bodyOfComments");
                    bodyOfComments.classList.add("hidden");
                    divPost.appendChild(bodyOfComments);

                    // filter comments
                    let arrayOfComments = [];
                    for (let comment of comments) {
                        for (let commentKey in comment) {
                            if (commentKey === "postId")
                                if (post.id === comment[commentKey])
                                    arrayOfComments.push(comment);
                        }
                    }

                    // build structure of comments
                    for (let comment of arrayOfComments) {
                        let newPath = document.createElement("div");
                        newPath.classList.add("comment");
                        bodyOfComments.appendChild(newPath);

                        for (let commentKey in comment) {
                            let commentValue = comment[commentKey];

                            let commentDiv = document.createElement("div");
                            commentDiv.classList.add("comment-field");
                            newPath.appendChild(commentDiv);

                            let commentFieldName = document.createElement("div");
                            commentFieldName.innerText = commentKey;
                            commentFieldName.classList.add("comment-field-name");
                            commentDiv.appendChild(commentFieldName);

                            let commentFieldDescription = document.createElement("div");
                            commentFieldDescription.innerText = commentValue;
                            commentFieldDescription.classList.add("comment-field-description");
                            commentDiv.appendChild(commentFieldDescription);
                        }
                    }

                });
            //  triggering the button
            postButton.onclick = function () {
                let visibleComments = postButton.parentElement.getElementsByClassName("bodyOfComments");
                for (let i = 0; i < visibleComments.length; i++) {
                    visibleComments[i].classList.toggle("hidden");
                }
            }
        }
    });