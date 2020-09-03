function extractText() {
    let items = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");
    for (let i = 0; i < items.length; i++) {
        textarea.value += items[i].textContent + "\n";
    }
}
