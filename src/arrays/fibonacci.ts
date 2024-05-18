const alreadyCalculatedValues: Record<number, number> = {
  0: 0,
  1: 1,
}

export function fibonacci(positionNumber: number): number {
  if (alreadyCalculatedValues[positionNumber] !== undefined) {
    return alreadyCalculatedValues[positionNumber]!
  }

  alreadyCalculatedValues[positionNumber] =
    fibonacci(positionNumber - 1) + fibonacci(positionNumber - 2)

  return alreadyCalculatedValues[positionNumber]!
}

export function fibonacciIterative(positionNumber: number): number {
  if (isNaN(positionNumber) || positionNumber < 0) {
    throw new Error('invalid position number')
  }

  if (positionNumber === 0 || positionNumber === 1) {
    return positionNumber
  }

  let previous = 0
  let fibonacciNumber = 1

  for (let i = 2; i <= positionNumber; i++) {
    // Store the current fibonacciNumber in a temporary variable
    const temp = fibonacciNumber
    // Calculate the next fibonacciNumber by adding the previous two numbers
    fibonacciNumber = fibonacciNumber + previous
    // Update the previous number to be the current fibonacciNumber
    previous = temp
  }

  return fibonacciNumber
}
