const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);
    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('d', 'move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('a', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('return', 'place move', this.placeMove.bind(this));
    this.cursor.setBackgroundColor();
    Screen.render();
  }


  placeMove() {
    let current_col = this.cursor.col;
    if(this.grid[0][current_col] != ' ') {
      console.log('Please choose a column with empty spaces.')
      return;
    }

    for(let i = this.grid.length - 1; i >= 0; i--) {
      if(this.grid[i][current_col] === ' ') {
        this.grid[i][current_col] = this.playerTurn;
        Screen.setGrid(i, current_col, this.playerTurn)
        Screen.render();
        let current_status = ConnectFour.checkWin(this.grid);
        if(current_status) {
          ConnectFour.endGame(current_status);
        }
        this.playerTurn === 'O' ? this.playerTurn = 'X' : this.playerTurn = 'O';
        return;
      }
    }
  }
  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    let winner = null;
    
    checkRows();

    if(!winner) {
      checkCols();
    }

    if(!winner) {
      checkDiags();
    }

    if(!winner) {
      checkTie();
    }

    return winner;
    
    function checkRows() {
      for(let i = 0; i < grid.length; i++) {
        let current_row = grid[i];
        if(checkRow(current_row)) {
          return winner = checkRow(current_row);
        }
      }
    }

    function checkRow(row) {
      let char;
      let count = 0;

      for(let i = 0; i < row.length; i++) {
        let current_char = row[i];
        if(current_char !== ' ') {
          if(char !== current_char) {
            char = current_char;
            count = 1;
          } else {
            count++;
          }
        } else {
          count = 0;
        }
        
        if(count >= 4) {
          return char;
        }
      }
      return false;
    }


    function checkCols() {
      let row_length = grid[0].length;

      for(let i = 0; i < row_length; i++) {
        let current_col = i;
        if(checkCol(current_col)) {
          return winner = checkCol(current_col);
        }
      }      
    }

    function checkCol(col) {
      let char;
      let count = 0;

      for(let i = 0; i < grid.length; i++) {
        let current_char = grid[i][col];
        if(current_char !== ' ') {
          if(char !== current_char) {
            char = current_char;
            count = 1;
          } else {
            count++;
          }
        } else {
          count = 0;
        }
        
        if(count >= 4) {
          return char;
        }
      }
      return false;
    }

    function checkDiags() {
      for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[0].length; x++) {
      
          let upward_check = checkDiag(x, y, 1, -1);
          if(upward_check) {
            return winner = upward_check;
          }
      
          let downward_check = checkDiag(x, y, 1, 1);
          if(downward_check) {
            return winner = downward_check;
          }
        }
      }
    }

    function checkDiag(x, y, x_offset, y_offset) {
      let current_x = x;
      let current_y = y;
      let x_limit = 6;
      let y_limit = 5;
      let max_x = x + (x_offset * 3);
      let max_y = y + (y_offset * 3);

      if(max_x < 0 || max_x > x_limit || max_y < 0 || max_y > y_limit ) {
        return false;
      }

      let current_char = grid[current_y][current_x];
      if(current_char === ' ') {
        return false;
      }

      for(let i = 0; i < 3; i++) {
        current_x += x_offset;
        current_y += y_offset;
        if(grid[current_y][current_x] != current_char) {
          return false;
        }
      }

      return current_char;
    }

    function checkTie() {
      for(let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for(let k = 0; k < row.length; k++) {
          if(row[k] === ' ') {
            return winner = false;
          }
        }
      }
      return winner = 'T';
    }
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

module.exports = ConnectFour;
