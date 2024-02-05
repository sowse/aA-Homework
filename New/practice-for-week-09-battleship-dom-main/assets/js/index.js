import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
const HTMLboard = document.createElement("div");
function createBoard() {
    HTMLboard.setAttribute("id", "board");
    document.body.appendChild(HTMLboard);
  
    for(let i = 0; i <= 8; i++) {
      for(let k = 0; k <= 8; k++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("data-col", k);
        cell.setAttribute("data-row", i);
        cell.addEventListener("click", clickHandler);
        HTMLboard.appendChild(cell);
      }
    }
  }

function clickHandler(event) {
  let cell = event.target
  let row = Number(cell.dataset.row);
  let col = Number(cell.dataset.col);
  let hit = board.makeHit(row,col)
  if (hit) {
    cell.classList.add("green")
    cell.innerText = hit;
  } else {
    cell.classList.add("red")
  }

  if(board.isGameOver()) {
    gameoverHandler();
  }
}

function gameoverHandler() {
  const results = document.getElementById("result-card");
  results.innerText = "You Win!"
  const boardCells = document.getElementById("board");
  const cellArray = Array.from(boardCells);

  for(let i = 0; i < cellArray.length; i++) {
    cellArray[i].removeEventListener("click", clickHandler);}
}
window.onload = (event) => {
    createBoard();
}