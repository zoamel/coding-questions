export function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let currentMax = 0

  nums.forEach((num) => {
    if (num === 1) {
      currentMax = currentMax + 1
      max = Math.max(max, currentMax)
    } else {
      currentMax = 0
    }
  })

  return max
}
