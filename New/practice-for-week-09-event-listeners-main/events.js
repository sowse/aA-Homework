// Your code here

window.addEventListener("DOMContentLoaded", event => {
    const loadNotification = document.createElement("h1");
    loadNotification.innerText = "Page has been loaded.";
    document.body.appendChild(loadNotification);


    const redInput = document.getElementById("red-input");
    function backgroundRed(event) {
        if(redInput.value.includes("red")) {
            redInput.setAttribute("style", "background-color:red");   
        } else {
            redInput.setAttribute("style", "background-color:none");
        }        
    }
    redInput.addEventListener("input", backgroundRed);

   const addItemButton = document.getElementById("add-item");
   function listAdd(event) {
    const list = document.getElementsByTagName("ul")[0];
    const newItem = document.createElement("li");
    newItem.innerText = document.getElementById("list-add").value;
    list.appendChild(newItem);
   }
   addItemButton.addEventListener("click", listAdd);


   const colorSelect = document.getElementById("color-select");
   function changeColor(event) {
    const section = document.getElementById("section-3");
    const colorValue = colorSelect.value;
    section.setAttribute("style", `background-color:${colorValue}`);
   }
   colorSelect.addEventListener("change", changeColor);

   const removeListenerButton = document.getElementById("remove-listeners");
   removeListenerButton.addEventListener("click", event => {
    redInput.removeEventListener("input", backgroundRed);
    addItemButton.removeEventListener("click", listAdd);
    colorSelect.removeEventListener("change", changeColor);
   })
})