import { test, expect } from 'vitest'

import { fibonacci, fibonacciIterative } from '../../src/arrays/fibonacci.js'

test('fibonacci', () => {
  expect(fibonacci(0)).toEqual(0)
  expect(fibonacci(1)).toEqual(1)
  expect(fibonacci(9)).toEqual(34)
  expect(fibonacci(10)).toEqual(55)
  expect(fibonacci(40)).toEqual(102334155)
  expect(fibonacci(50)).toEqual(12586269025)
})

test('fibonacci iterative', () => {
  expect(fibonacciIterative(0)).toEqual(0)
  expect(fibonacciIterative(1)).toEqual(1)
  expect(fibonacciIterative(9)).toEqual(34)
  expect(fibonacciIterative(10)).toEqual(55)
  expect(fibonacciIterative(40)).toEqual(102334155)
  expect(fibonacciIterative(50)).toEqual(12586269025)
})
