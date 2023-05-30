function getNeighbors(row, col, graph) {

  let neighbours = [[row-1, col], [row+1, col], [row, col-1], [row, col+1]];
  return neighbours.filter(coods =>
      coods[0] >= 0 && coods[0] < graph.length && coods[1] >=0 && coods[1] < graph[0].length && graph[coods[0]][coods[1]] === 1);
  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]]
  // Put the stringified starting node in visited
  visited.add(stack[0].join(','));
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while(stack.length > 0) {
    // Pop the first node
    curr_node = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(curr_node[0], curr_node[1], graph);
    for(let i = 0; i < neighbors.length; i++) {
      let cood_str = neighbors[i].join(',');
      if(!visited.has(cood_str)) {
        visited.add(cood_str);
        stack.push([neighbors[i][0], neighbors[i][1]]);
      }
    }
  }
  // return size
  return size;
  // Your code here
}

module.exports = [getNeighbors, islandSize];
