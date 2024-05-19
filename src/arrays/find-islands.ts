export function findIslands(grid: number[][]): number {
  const rows = grid.length
  const columns = grid[0].length

  let isLandCount = 0

  // Map of islands that were already visited
  const visited = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(false))

  const depthFirstSearch = (row: number, column: number) => {
    // Check if the current position is out of bounds, already visited, or not part of an island
    if (
      row < 0 ||
      row >= rows ||
      column < 0 ||
      column >= columns ||
      visited[row][column] ||
      grid[row][column] === 0
    ) {
      return
    }

    // Mark the current position as visited
    visited[row][column] = true

    // Define the possible directions to explore from the current position
    const directions = [
      [1, 0], // Down
      [-1, 0], // Up
      [0, 1], // Right
      [0, -1], // Left
    ]

    // Explore each direction recursively
    for (const [dx, dy] of directions) {
      depthFirstSearch(row + dx, column + dy)
    }
  }

  // Iterate through each cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      // Check if the cell has not been visited and is part of an island
      if (!visited[row][col] && grid[row][col] === 1) {
        // Perform a depth-first search to explore the island
        depthFirstSearch(row, col)
        // Increment the island count
        isLandCount = isLandCount + 1
      }
    }
  }

  return isLandCount
}
