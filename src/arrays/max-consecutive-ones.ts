export function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let currentMax = 0

  nums.forEach((num) => {
    if (num === 1) {
      currentMax = currentMax + 1
    } else {
      currentMax = 0
    }

    if (currentMax > max) {
      max = currentMax
    }
  })

  return max
}
