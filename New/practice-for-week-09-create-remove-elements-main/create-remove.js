/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split("/")[4];
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDog = document.createElement("li");
        newDog.innerHTML = `<figure><img src="${url}"><figcaption>${breed}</figcaption></figure>`
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const dogList = document.getElementsByTagName("ul")[0];
        dogList.appendChild(newDog);
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
const firstDog = document.getElementsByTagName("li")[0];
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
const dogList = document.getElementsByTagName("li");
const lastDog = dogList[dogList.length-1];
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
lastDog.remove();
});
