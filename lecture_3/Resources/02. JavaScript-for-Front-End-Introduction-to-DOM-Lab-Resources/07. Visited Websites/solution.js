function solve() {
    var container = document.querySelector("div.middled");
    for (let i = 0; i < container.childElementCount; i++) {
        var childElement = container.children[i];
        childElement.addEventListener("click", increaseCount);
    }

    function increaseCount(e) {
        const target = e.currentTarget;
        let pText = target.children[1];
        let pTextArray = pText.textContent.split(" ");
        let counter = pTextArray[1];
        counter = +counter + 1;
        pText.textContent = `${pTextArray[0]} ${counter} ${pTextArray[2]}`;
    }
}
