function focus() {
    var inputArr = document.querySelectorAll("input");

    for (let i = 0; i < inputArr.length; i++) {
        const input = inputArr[i];
        input.addEventListener("focus", FocusEvent);
    }

    function FocusEvent(e) {
        var target = e.currentTarget.parentElement;

        for (let i = 0; i < inputArr.length; i++) {
            const input = inputArr[i];
            if (input.parentElement.classList.contains("focused") == true) {
                input.parentElement.classList.remove("focused");
            }
        }

        target.setAttribute("class", "focused");
    }
}
