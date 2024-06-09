import { expect, test } from 'vitest'

import { findNumbersWithEvenNumOfDigits } from '../../src/arrays/even-number-of-digits.js'

test('evenNumberOfDigits', () => {
  expect(findNumbersWithEvenNumOfDigits([12, 345, 2, 6, 7896])).toEqual(2)
  expect(findNumbersWithEvenNumOfDigits([555, 901, 482, 1771])).toEqual(1)
})
