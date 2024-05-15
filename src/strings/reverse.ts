export function reverseStrings(input: string): string {
  const stringLength = input.length
  let reversedString = ''

  for (let i = stringLength - 1; i >= 0; i--) {
    reversedString += input[i]
  }

  return reversedString
}
