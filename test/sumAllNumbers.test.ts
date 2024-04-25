import { expect, test } from 'vitest'

import { sumAllNumbers } from '../src/sumAllNumbers.js'

test('sumAllNumbers', () => {
  const sum = sumAllNumbers([1, 2, 3, 4])

  expect(sum).toEqual(10)
})
