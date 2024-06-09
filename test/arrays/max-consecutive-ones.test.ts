import { expect, test } from 'vitest'
import { findMaxConsecutiveOnes } from '../../src/arrays/max-consecutive-ones.js'

test('max consecutive ones', () => {
  expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3)
  expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2)
  expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1])).toEqual(6)
  expect(findMaxConsecutiveOnes([0, 0, 0, 0, 0, 0])).toEqual(0)
})
