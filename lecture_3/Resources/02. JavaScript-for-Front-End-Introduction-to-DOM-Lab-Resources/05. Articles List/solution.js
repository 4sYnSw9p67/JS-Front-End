function createArticle() {
    var title = document.querySelector("#createTitle");
    var content = document.querySelector("#createContent");
    var articles = document.querySelector("#articles");

    if (title.value.trim() === "" && content.value.trim() === "") {
        alert("Title and Content cannot be empty!");
    } else {
        var article = document.createElement("article");
        var articleTitle = document.createElement("h3");
        var articleContent = document.createElement("p");

        articleTitle.textContent = title.value;
        articleContent.textContent = content.value;

        article.appendChild(articleTitle);
        article.appendChild(articleContent);

        articles.appendChild(article);
    }
    title.value = "";
    content.value = "";
}

//Title value from the title input should be a heading 3 element <h3>
// Content text from the textarea element should be a paragraph <p>
// Both new created elements (h3 and p) should be appended to a new article element <article>
// The current article element should be appended to the section which has an id articles (#articles)
// You should create new article element only if title and content are not empty
// After the button is pressed you must clear the title value and text value

//Judge Answer
// function createArticle() {
//     var title = document.querySelector("#createTitle");
//     var content = document.querySelector("#createContent");
//     var articles = document.querySelector("#articles");

//     if (title.value.trim() !== "" && content.value.trim() !== "") {

//         var article = document.createElement("article");
//         var articleTitle = document.createElement("h3");
//         var articleContent = document.createElement("p");

//         articleTitle.textContent = title.value;
//         articleContent.textContent = content.value;

//         article.appendChild(articleTitle);
//         article.appendChild(articleContent);

//         articles.appendChild(article);
//     }
//     title.value = "";
//     content.value = "";
// }