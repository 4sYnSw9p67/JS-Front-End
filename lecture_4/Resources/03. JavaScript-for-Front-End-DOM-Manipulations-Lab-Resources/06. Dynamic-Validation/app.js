function validate() {
    let input = document.querySelector("input#email");
    let regex = /[a-z]+@[a-z]+\.[a-z]+/g;

    input.addEventListener("change", InputValidator);

    function InputValidator(e) {
        var target = e.currentTarget;
        if (target.value.match(regex)) {
            if (target.classList.contains("error")) {
                target.classList.remove("error");
            }
        } else {
            if (!target.classList.contains("error")) {
                target.classList.add("error");
            }
        }
    }
}
