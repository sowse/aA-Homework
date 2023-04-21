let cooldown = 3000;
debugger;
function rest() { 
    const resetCooldown = function() {
      act();
      cooldown = 3000;
    }
    setTimeout(resetCooldown, cooldown);
}

function act() {
    console.log("test complete.");
    rest();
}


rest();
