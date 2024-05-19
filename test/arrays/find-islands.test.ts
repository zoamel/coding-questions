import { expect, test } from 'vitest'
import { findIslands } from '../../src/arrays/find-islands.js'

test('Find islands in a grid', () => {
  const grid1 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]

  expect(findIslands(grid1)).toEqual(3)

  const grid2 = [
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]

  expect(findIslands(grid2)).toEqual(5)

  const grid3 = [
    [1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
  ]
  expect(findIslands(grid3)).toEqual(6)
})
