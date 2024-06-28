function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  const rv = [];

  if (row > 0 && graph[row - 1][col] === 1) rv.push([row - 1, col]);

  if (row < graph.length - 1 && graph[row + 1][col] === 1) rv.push([row + 1, col]);

  if (col > 0 && graph[row][col - 1] === 1) rv.push([row, col - 1]);

  if (col < graph[0].length - 1 && graph[row][col + 1] === 1) rv.push([row, col + 1]);

  return rv;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
  if (graph[row][col] === 0) return 0;

  const start = [row, col];
  const stack = [start];
  const visited = new Set([start.toString()]);


  while (stack.length > 0) {
    const curr = stack.pop();
    const neighbors = getNeighbors(curr[0], curr[1], graph);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        visited.add(neighbor.toString());
      }
    }
  }
  return visited.size;
}

module.exports = [getNeighbors, islandSize];
