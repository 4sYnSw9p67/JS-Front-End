function solve() {
  const teamPositions = [
    { support: ["Tech Support", "Medical Support", "Assistant Support"] },
    {
      crm: [
        "Community Manager",
        "Customer Care Manager",
        "Lead Administrative Officer"
      ]
    },
    {
      marketing: ["PR Manager", "Social Media Manager", "Marketing Specialist"]
    },
    {
      development: ["Junior Developer", "Regular Developer", "Senior Developer"]
    },
    {
      other: ["Team Lead", "Regular Employee", "Intern"]
    }
  ];

  let textFields = document.querySelectorAll("#personal-info .text-field");

  Array.from(textFields).forEach(item => {
    item.addEventListener("click", updateField);
  });

  function updateField() {
    let input = document.createElement(`input`);
    input.className = "form-control w-50 m-auto";

    if (this.classList.contains("number-field")) {
      input.setAttribute("type", "number");
    }

    let oldValue = this.textContent;
    input.value = oldValue;

    input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        let updatedText = input.value;
        let p = document.createElement("p");
        p.textContent = updatedText;
        p.className = "text-dark text-field";
        this.parentElement.appendChild(p);
        this.parentElement.removeChild(input);
      }
    });

    this.parentElement.appendChild(input);
    this.parentElement.removeChild(this);
  }

  let teams = document.querySelectorAll("#team-position-container input");

  [...teams].forEach(team => {
    team.addEventListener("click", updateTeamPositions);
  });

  function updateTeamPositions() {
    let positionsList = document.querySelectorAll(".position-label");
    let position = this.value;

    let currentPositions = teamPositions.filter(obj => {
      return obj[position];
    });

    let items = Object.values(currentPositions[0])[0];

    

    for (let index = 0; index < positionsList.length; index++) {
      let span = positionsList[index].querySelector("span");
      span.textContent = items[index];
    }
  }

  let resetButtons = document.querySelectorAll(".btn-danger");
  [...resetButtons].forEach(item => {
    item.addEventListener("click", resetData);
  });

  function resetData() {
    let textFields = document.querySelectorAll("#personal-info .text-field");
    textFields[0].textContent = "Pesho";
    textFields[1].textContent = "Peshov";
    textFields[2].textContent = "555-333-4545";
    textFields[3].textContent = "9311124003";
  }
}
