const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seedFruit = document.getElementsByClassName("seed");
    console.log(seedFruit);
    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessFruit = document.getElementsByClassName("seedless");
    console.log(seedlessFruit);
    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = seedlessFruit[0];
    console.log(firstSeedless);
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const youText = document.getElementById("wrapper").children[0].children[0].innerText;
    console.log(youText);
    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChildren = document.getElementById("wrapper").children;
    console.log(wrapperChildren);
    // 6. Get all odd number list items in the list
    // Your code here
    const oddItems = document.getElementsByClassName("odd");
    console.log(oddItems);
    // 7. Get all even number list items in the list
    // Your code here
    const olList = document.getElementsByTagName("ol");
    const evenItems = olList[0].querySelectorAll("li:not(.odd)")
    console.log(evenItems);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const companiesClassless = document.querySelectorAll("a:not(a[class])");
    console.log(companiesClassless);    
    // 9. Get "Amazon" list element
    // Your code here
    const amazonComp = document.getElementsByClassName("shopping")[0];
    console.log(amazonComp);
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornComps = document.querySelectorAll('#three li:has(.unicorn)');
    console.log(unicornComps);
}

window.onload = select;
