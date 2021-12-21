//    1.
//  Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб
// отримати 5 елементів в рядку.
//  Для кожного елементу свій блок div.post
//  Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        let body = document.createElement("div");
        body.classList.add("body");
        document.body.appendChild(body);
        for (let post of posts) {
            let divPost = document.createElement("div");
            divPost.classList.add("post");
            body.appendChild(divPost);

            recForObjects(post, divPost);

            function recForObjects (element, path) {
                for (let elementKey in element) {
                    let newPath = document.createElement("div");
                    newPath.classList.add("post-field");
                    let elemValue = element[elementKey];
                    path.appendChild(newPath);
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
                        recForObjects(elemValue, newPath);
                    }
                }
            }
        }
    });

//     2.
//  Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
//  Для кожного елементу свій блок div.comment
//  Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(posts => {
        let body = document.createElement("div");
        body.classList.add("body");
        document.body.appendChild(body);
        for (let post of posts) {
            let divPost = document.createElement("div");
            divPost.classList.add("comment");
            body.appendChild(divPost);

            recForObjects(post, divPost);

            function recForObjects (element, path) {
                for (let elementKey in element) {
                    let newPath = document.createElement("div");
                    newPath.classList.add("comment-field");
                    let elemValue = element[elementKey];
                    path.appendChild(newPath);
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
                        recForObjects(elemValue, newPath);
                    }
                }
            }
        }
    });