// Your code here
window.addEventListener("DOMContentLoaded", event => {
const addButton = document.getElementById("add");
const shoppingList = document.getElementById("shopping-list");
function addItems(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const newItem = document.createElement("li")
    newItem.setAttribute("data-type", `${type}`);
    newItem.innerText = name;
    shoppingList.appendChild(newItem);
} 

addButton.addEventListener("click", addItems);

})