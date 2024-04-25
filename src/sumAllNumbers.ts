export function sumAllNumbers(numbers: number[]): number {
  return numbers.reduce((prev, acc) => {
    return acc + prev
  }, 0)
}
