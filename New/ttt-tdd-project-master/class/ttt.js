const Screen = require("./screen");
const Cursor = require("./cursor");
const ComputerPlayer = require("./computer-player");
class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('w', 'Move up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('s', 'Move down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('a', 'Move left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', 'Move right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('return', 'Place mark', this.placeMark.bind(this));
    Screen.render();
  }


  placeMark() {
    let current_row = this.cursor.row;
    let current_col = this.cursor.col;
    this.grid[current_row][current_col] = this.playerTurn;
    Screen.setGrid(current_row, current_col, this.playerTurn);

    let current_winner = TTT.checkWin(this.grid);
    if(current_winner) {
      TTT.endGame(current_winner);
    }
    this.playerTurn === "O" ? this.playerTurn = "X" : this.playerTurn = "O"
    let aiMove = ComputerPlayer.getSmartMove(this.grid, this.playerTurn);

    this.grid[aiMove.row][aiMove.col] = this.playerTurn;
    Screen.setGrid(aiMove.row, aiMove.col, this.playerTurn);
    Screen.render();
    current_winner = TTT.checkWin(this.grid);
    if(current_winner) {
      TTT.endGame(current_winner);
    }
    this.playerTurn === "O" ? this.playerTurn = "X" : this.playerTurn = "O"
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    let winner = null;
    let last_row_idx = grid.length - 1;
    
    function checkFull() {
      for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for(let k = 0; k < row.length; k++) {
          if(row[k] === ' ') {
            return winner = false;
          }
        }
      }

      return winner = 'T';
    }

    function checkRow(row_idx, char) {
      let row = grid[row_idx];
      for(let i = 1; i < row.length; i++) {
        if(row[i] != char) {
          return;
        }
      }

      return winner = char;
    }

    function checkDiagUp(last_row_idx, char) {
      for(let i = 1; i < grid.length; i++) {
        let current_char = grid[i][i];
        if(char != current_char) {
          return;
        }
      }

      return winner = char;
    }

    function checkDiagDown(last_row_idx, char) {
      let col = 0;

      for(let i = last_row_idx; i >= 0; i--) {
        let current_char = grid[i][col];
        if(char != current_char) {
          return;
        }
        col ++;
      }

      return winner = char;
    }

    function checkRowsAndDiags() {
      for(let i = 0; i < grid.length; i++) {
        let char = grid[i][0];
        if(char != ' ') {
          if(i === 0) {
            checkDiagUp(last_row_idx, char);
          } else if(i === last_row_idx) {
            checkDiagDown(last_row_idx, char);
          }

        checkRow(i, char);
        }
      }
    }

    function checkCols() {
      for(let i = 0; i < grid.length; i++) {
        let char = grid[0][i];
        if(char != ' ') {
          if(winner) {
            return;
          }
          checkCol(i, grid[0][i]);
        }
      } 
      

    }

    function checkCol(idx,char) {
      for(let i = 1; i < grid.length; i++) {
        if(grid[i][idx] != char) {
          return;
        }
      }

      return winner = char;
    }
    if(winner === null) {
      checkRowsAndDiags();
    }

    if(winner === null) {
      checkCols();
    }

    if(winner === null) {
      checkFull();
    }
    return winner;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
