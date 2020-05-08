const isDivisibleBy = (dividend) => {
  return (divisor) => {
    return dividend % divisor === 0
  }
}

export const isLeap = (year) => {
  const yearIsDivisibleBy = isDivisibleBy(year)

  return yearIsDivisibleBy(4) && (!yearIsDivisibleBy(100) || yearIsDivisibleBy(400))
}
