function addFunctionality() {
    let pElems = document.querySelectorAll(".p-elem");
    let inputElems = document.querySelectorAll(".input-elem");
    let teamAndPosCollection = [
        ["Tech Support", "Medical Support", "Assistant Support"],
        [
            "Community Manager",
            "Customer Care Manager",
            "Lead Administrative Officer"
        ],
        ["PR Manager", "Social Media Manager", "Marketing Specialist"],
        ["Junior Developer", "Regular Developer", "Senior Developer"],
        ["Team Lead", "Regular Employee", "Intern"]
    ];

    for (const pElem of pElems) {
        pElem.addEventListener("click", editPElem);
    }
    for (const inputElem of inputElems) {
        inputElem.addEventListener("keyup", editInputElem);
    }
    function editPElem() {
        let pTextContent = this.textContent;
        let inputEl = this.parentElement.querySelectorAll("input")[0];

        inputEl.value = pTextContent.trim();
        this.classList.add("d-none");
        inputEl.classList.remove("d-none");
    }

    function editInputElem(e) {
        if (e.keyCode === 13) {
            let inputValue = this.value;
            let pElement = this.parentElement.querySelectorAll("p")[0];

            pElement.textContent = inputValue.trim();
            this.classList.add("d-none");
            pElement.classList.remove("d-none");
        }
    }

    let inputTeamCollection = document.getElementsByName("team");

    for (const inputTeam of inputTeamCollection) {
        inputTeam.addEventListener("click", selectTeam);
    }

    function selectTeam() {
        let teamValue = this.value;
        let posRadios = document.querySelectorAll("label.position");
        let positions = teamAndPosCollection[+teamValue];
        for (let i = 0; i < positions.length; i++) {
            posRadios[i].textContent = positions[i];
        }
    }
}
