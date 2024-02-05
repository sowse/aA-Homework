const addName = () => {
    const newName = document.createElement("h1");
    newName.setAttribute("class", "name");
    newName.innerText = "sowse";
    document.body.appendChild(newName);
}

const addDetails = () => {
    const newDetails = document.createElement("ul");
    newDetails.setAttribute("class", "my-details");
    const detailItems = ["Age: 25", "Star Sign: Virgo", "Occupation: Physical Therapist", "Location: Madrid, Spain"];
    document.body.appendChild(newDetails);

    for(let i = 0; i < detailItems.length; i++) {
        let item = document.createElement("li");
        item.setAttribute("class", "detail");
        item.innerText = detailItems[i];
        newDetails.appendChild(item);
    }
}

const addClock = () => {

    const pageClock = document.createElement("p");
    pageClock.setAttribute("id", "clock");
    document.body.appendChild(pageClock);
}

const updateClock = () => {
    const clock = document.getElementById("clock");
    clock.innerText = new Date().toLocaleTimeString();
    setTimeout(updateClock, 1000);
}
const buildSite = () => {
    addName();
    addDetails();
    addClock();
    updateClock();
}

window.onload = buildSite;