import { test, expect } from 'vitest'

import { countNumbersAndPutResultInObject } from '../../src/arrays/reduce.js'

test('count how many times number appears in an array and return it as an object', () => {
  expect(countNumbersAndPutResultInObject([1, 1, 2, 2, 2, 3])).toEqual({
    1: 2,
    2: 3,
    3: 1,
  })
})
