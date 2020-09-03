function addFunctionality() {
    let quoteInput = document.getElementById("quote");
    let authorInput = document.getElementById("author");
    let urlInput = document.getElementById("image_url");
    let addBtn = document.getElementById("add-btn");
    let leftSideCol = document.getElementById("left-side-col");
    let rightSideCol = document.getElementById("right-side-col");

    addBtn.addEventListener("click", addNewQuote);

    function addNewQuote() {
        let quoteText = quoteInput.value;
        let authorText = authorInput.value;
        let urlText = urlInput.value;

        if (quoteText) {
            let newQuote = document.createElement("div");
            newQuote.className = "quote-element";
            newQuote.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4 p-1">
                        <img src="${urlText}"
                            class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">${quoteText}</p>
                            <p class="card-text text-secondary font-italic">${authorText}</p>
                            <p class="card-text"><button type="button" class="btn bg-dark text-white like-btn">★</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;

            leftSideCol.appendChild(newQuote);

            let likeBtns = document.querySelectorAll(
                "div#left-side-col .like-btn"
            );
            let lastBtnCreated = likeBtns[likeBtns.length - 1];

            lastBtnCreated.addEventListener("click", addToFavourites);

            // i did the input value deletion here and not outside
            // of the if statement because this is how it would be
            // more convinient for the user
            quoteInput.value = "";
            authorInput.value = "";
            urlInput.value = "";
        }
    }

    function addToFavourites() {
        let quoteElement = this.parentElement.parentElement.parentElement
            .parentElement.parentElement.parentElement;
        rightSideCol.appendChild(quoteElement);
        this.removeEventListener("click", addToFavourites);
    }
}
