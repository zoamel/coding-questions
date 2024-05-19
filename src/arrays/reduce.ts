export function countNumbersAndPutResultInObject(
  numbers: number[],
): Record<number, number> {
  return numbers.reduce(
    (acc, current) => {
      if (acc[current] !== undefined) {
        acc[current] = acc[current]! + 1
      } else {
        acc[current] = 1
      }

      return acc
    },
    {} as Record<number, number>,
  )
}
