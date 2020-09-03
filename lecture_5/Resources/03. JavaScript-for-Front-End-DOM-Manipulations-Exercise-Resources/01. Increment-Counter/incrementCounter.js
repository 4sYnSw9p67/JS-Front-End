function increment(selector) {
    let selectedElement = document.querySelector(selector);

    let textarea = document.createElement("textarea");
    textarea.className = "counter";
    textarea.value = 0;
    textarea.setAttribute("disabled", true);
    selectedElement.appendChild(textarea);

    let incrementBtn = createButton("btn", "incrementBtn", "Increment");
    let addBtn = createButton("btn", "addBtn", "Add");
    selectedElement.appendChild(incrementBtn);
    selectedElement.appendChild(addBtn);

    let ul = document.createElement("ul");
    ul.className = "results";
    selectedElement.appendChild(ul);


    incrementBtn.addEventListener("click", plusOne);
    addBtn.addEventListener("click", createEntry);

    function createButton(btnClass, btnId, btnTextContent) {
        let btn = document.createElement("button");
        btn.className = btnClass;
        btn.setAttribute("id", btnId);
        btn.textContent = btnTextContent;
        return btn;
    }

    function plusOne() {
        textarea.value++;
    }

    function createEntry() {
        let li = document.createElement("li");
        li.textContent = textarea.value;
        ul.appendChild(li);
    }
}
