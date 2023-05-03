class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let valid_moves = [];

    for(let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for(let k = 0; k < row.length; k++) {
        if(row[k] === ' ') {
          valid_moves.push({row: i, col: k});
        }
      }
    }

    return valid_moves;
  }

  static randomMove(grid) {
    let valid_moves = ComputerPlayer.getValidMoves(grid);
    let move = Math.floor(Math.random() * valid_moves.length);
    // Your code here
    return valid_moves[move];
  }

  static getWinningMoves(grid, symbol) {
    // Your code here
    const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);
    let test_grid = clone(grid);
    let winning_moves = [];
    let valid_moves = ComputerPlayer.getValidMoves(grid);

    for (let i = 0; i < valid_moves.length; i++) {
      let move = valid_moves[i];
      test_grid[move.row][move.col] = symbol;
      if(ComputerPlayer.checkWin(test_grid) === symbol){
        winning_moves.push(move);
      }
      test_grid[move.row][move.col] = ' ';
    }

    return winning_moves;
  }

  static getSmartMove(grid, symbol) {
    let enemy;
    symbol === 'O' ? enemy = 'X' : enemy = 'O';

    let turn_count = 1;

    for(let i = 0; i < grid.length; i++) {
      for(let k = 0; k < grid[0].length; k++) {
        if(grid[i][k] != ' ') {
          turn_count++;
        }
      }
    }

    let edges = {left: grid[1][0] === enemy, right: grid[1][2] === enemy, bottom: grid[2][1] === enemy, top: grid[0][1] === enemy}
    let corners = {top_left: grid[0][0] === enemy, top_right: grid[0][2] === enemy, bottom_left: grid[2][0], bottom_right: grid[2][2]};
    let center = grid[1][1] === enemy;
    let ai_win = ComputerPlayer.getWinningMoves(grid, symbol);
    let enemy_win = ComputerPlayer.getWinningMoves(grid, enemy);



    if(ai_win.length > 0) {
      return ai_win[0];
    } else if(enemy_win.length > 0) {
      return enemy_win[0];
    }
//logic when playing first
    if(turn_count === 1) {
      return {row: 0, col: 0};
    }

    if(turn_count === 3) {
      if(center) {
        return {row: 2, col: 2};
      } else {
        return corners.bottom_right ? {row: 0, col: 2} : {row: 2, col: 2};
      }
    }

//logic when playing second
    if(turn_count === 2) {
      if(!center) {
        return {row: 1, col: 1};
      } else {
        return {row: 0, col: 0};
      }
    }

    if(turn_count === 4) {
      if(Object.values(corners).includes(true) && !(Object.values(edges).includes(true))) {
        return {row: 1, col: 0};
      }
    }
    
//logic to prevent traps
    for(let i = 0; i < 3; i++) {
      for(let k = 0; k < 3; k++) {
        let current_pos = grid[i][k];
        if(current_pos === ' ') {
          grid[i][k] = enemy;
          if (ComputerPlayer.getWinningMoves(grid, enemy).length >= 2) {
            grid[i][k] = ' ';
            return {row: i, col: k};
          }

          grid[i][k] = ' ';
        }
      }
    }

    return ComputerPlayer.randomMove(grid);
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
}

module.exports = ComputerPlayer;
