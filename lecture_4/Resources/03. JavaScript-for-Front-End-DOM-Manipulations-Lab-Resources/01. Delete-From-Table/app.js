function deleteByEmail() {
    let email = document.querySelector("input[type=text]").value;
    let emailList = document.querySelectorAll("tbody tr td:last-child");
    let result = document.getElementById("result");

    Array.from(emailList).forEach(e => {
        let currentEmail = e.textContent;

        if (currentEmail === email) {
            //console.log(email);
            e.parentElement.remove(this);
            result.textContent = "Deleted.";
        } else {
            result.textContent = "Not found.";
        }
    });
}
//19.55

// Write a program that takes an e-mail from an input field and deletes the matching row
// from a table. If no entry is found, an error should be displayed in a <div> with ID "results".
// The error should be "Not found." Submit only the deleteByEmail() function in judge.
