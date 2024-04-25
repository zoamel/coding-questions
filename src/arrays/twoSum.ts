export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>()
  let response: number[] = []

  nums.forEach((num, index) => {
    const diff = target - num

    if (seen.has(diff)) {
      response = [seen.get(diff)!, index]
    } else {
      seen.set(num, index)
    }
  })

  return response
}
