import { test, expect } from 'vitest'
import { reverseStrings } from '../../src/strings/reverse.js'

test('reverse string', () => {
  const string1 = 'hello'
  const reversedString1 = 'olleh'
  expect(reverseStrings(string1)).toEqual(reversedString1)

  const string2 = 'world'
  const reversedString2 = 'dlrow'
  expect(reverseStrings(string2)).toEqual(reversedString2)

  const string3 = 'hello world'
  const reversedString3 = 'dlrow olleh'
  expect(reverseStrings(string3)).toEqual(reversedString3)
})
