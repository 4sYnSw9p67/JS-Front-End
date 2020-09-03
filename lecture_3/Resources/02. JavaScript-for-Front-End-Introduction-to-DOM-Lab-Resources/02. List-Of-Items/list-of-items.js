function addItem() {
    let newListItemText = document.getElementById("newItemText").value;

    let li = document.createElement("li");

    li.textContent = newListItemText;

    document.getElementById("items").appendChild(li);
}
