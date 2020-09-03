function solve() {
  let setUsernameBtn = document.querySelector("#username-section .btn-dark");
  setUsernameBtn.addEventListener("click", setUsername);
  let username = "Anonymous";

  function setUsername() {
    let newUsername = document.getElementById("username");
    username = newUsername.value;

    let p = document.createElement("p");
    p.className = "font-weight-bold pr-3";
    p.textContent = newUsername.value;
    p.setAttribute("id", "username");
    newUsername.parentElement.appendChild(p);
    newUsername.parentElement.removeChild(newUsername);
    setUsernameBtn.value = "Logout";

    setUsernameBtn.addEventListener("click", logout);
  }

  function logout() {
    this.value = "Set Username";
    username = "Anonymous";

    let inputField = document.createElement("input");
    inputField.setAttribute("type", "email");
    inputField.className = "form-control";
    let currentUsername = document.getElementById("username");
    currentUsername.parentElement.appendChild(inputField);
    currentUsername.parentElement.removeChild(currentUsername);
  }

  let logBtn = document.querySelector("#message-section .btn-dark");
  logBtn.addEventListener("click", logMessage);

  function logMessage() {
    let message = document.getElementById("message");

    let infoBtn = document.getElementById("info");
    let successBtn = document.getElementById("success");
    let errorBtn = document.getElementById("error");

    let messageBox = document.createElement("div");
    messageBox.className =
      "mb-2 container rounded font-weight-bold text-white p-3";
    let messageText = document.createElement("h2");
    messageText.className = "border-right d-inline border-dark pr-5";

    if (infoBtn.checked) {
      messageText.textContent = `Info: ${message.value}`;
      messageBox.classList.add("bg-info");
    } else if (successBtn.checked) {
      messageText.textContent = `Success: ${message.value}`;
      messageBox.classList.add("bg-success");
    } else if (errorBtn.checked) {
      messageText.textContent = `Error: ${message.value}`;
      messageBox.classList.add("bg-danger");
    }

    let usernameBox = document.createElement("h2");
    usernameBox.className =
      "border-right text-center d-inline border-dark pl-5 pr-5";
    usernameBox.textContent = username;

    let archiveBtn = document.createElement("h2");
    archiveBtn.classList = "d-inline pl-5";
    archiveBtn.textContent = "Archive";
    archiveBtn.addEventListener("click", deleteLog);

    messageBox.appendChild(messageText);
    messageBox.appendChild(usernameBox);
    messageBox.appendChild(archiveBtn);

    let logsSection = document.getElementById("logs");
    // Hide no logs title from the section
    let noLogsTitle = logsSection.querySelector("h2");
    noLogsTitle.style.display = "none";

    logsSection.appendChild(messageBox);
  }

  function deleteLog() {
    // this - is the archive button
    // the archive button parent is the whole section (log)
    // the log section parent is the section with #logs

    let logSection = this.parentElement.parentElement; // the archive button parent is the whole section (log)
    logSection.removeChild(this.parentElement);

    let section = document.getElementById("logs");
    if (section.children.length === 2) {
      // Show no logs title from the section
      let noLogsTitle = section.querySelector("h2");
      noLogsTitle.style.display = "block";
    }
  }
}
