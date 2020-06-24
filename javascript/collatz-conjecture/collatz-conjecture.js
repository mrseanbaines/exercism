export const steps = n => {
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  let num = n
  let stepsCount = 0

  while (num > 1) {
    num = num % 2 ? num * 3 + 1 : num / 2

    stepsCount += 1
  }

  return stepsCount
}
