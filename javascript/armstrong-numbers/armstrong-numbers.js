export const isArmstrongNumber = input => {
  return (
    input
      .toString()
      .split('')
      .reduce((sum, num, i, arr) => sum + num ** arr.length, 0) === input
  )
}
