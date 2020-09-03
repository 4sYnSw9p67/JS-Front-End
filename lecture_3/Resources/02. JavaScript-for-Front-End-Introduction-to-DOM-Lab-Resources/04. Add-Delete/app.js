function solve() {

function addItem() {
    let items = document.querySelector("#items");
    let newText = document.querySelector("#newText").value;
    let li = document.createElement("li");
    li.innerHTML = `${newText} <a href="#">[Delete]</a>`
    li.addEventListener('click', deleteItem);
    items.appendChild(li);

}
function deleteItem() {
    let li = this;
    let ul = li.parentNode;
    ul.removeChild(li);
}
addItem();
}
// document.body.innerHTML = `
// <h1>List of Items</h1>
// <ul id="items">
// </ul>
// <input type="text" id="newText" />
// <input type="button" value="Add"  onclick="addItem()">
// `;

// document.getElementById('newText').value = 'First';
// result();

// document.getElementById('newText').value = 'Second';
// result();

// let items = $('#items li');

// // Verify items where added with delete links
// expect(items.get(0).innerHTML).to.contains('First', "Element wasn't added.");
// expect(items.get(0).innerHTML).to.contains('<a href="#">[Delete]</a>', "Delete link wasn't added.");
// expect(items.get(1).innerHTML).to.contains('Second', "Element wasn't added.");
// expect(items.get(1).innerHTML).to.contains('<a href="#">[Delete]</a>', "Delete link wasn't added.");

// // Setup event
// var clickEvent = document.createEvent('MouseEvents');
// clickEvent.initEvent('click', true, true);
// items.eq(1).find('a').get(0).dispatchEvent(clickEvent);

// expect($('#items li').length).to.equal(1, "Correct element wasn't deleted.");
