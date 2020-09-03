function solve() {
    let allSections = document.querySelectorAll("section");
    let correctAnswers = [
        "onclick",
        "JSON.stringify()",
        "A programming API for HTML and XML documents"
    ];
    let correctAnswerCounter = 0;

    for (let i = 0; i < allSections.length; i++) {
        let section = allSections[i];
        let pCollection = section.querySelectorAll("p");
        for (let i = 0; i < pCollection.length; i++) {
            let p = pCollection[i];
            p.addEventListener("click", answerAndNext);
        }
    }

    function answerAndNext(e) {
        let target = e.currentTarget;
        if (correctAnswers.includes(target.textContent)) {
            correctAnswerCounter++;
        }
        let correspondingSection =
            target.parentElement.parentElement.parentElement.parentElement;
        correspondingSection.style.display = "none";
        let nextSiblingSection = correspondingSection.nextElementSibling;
        nextSiblingSection.style.display = "block";
        if (nextSiblingSection.nodeName == "UL") {
          let h1 = nextSiblingSection.querySelector("h1");
            if (correctAnswerCounter == 3) {
                h1.textContent = "You are recognized as top JavaScript fan!";
            } else {
                h1.textContent = `You have ${correctAnswerCounter} right answers`;
            }
        }
    }
}
