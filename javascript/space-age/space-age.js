const earthYears = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

const secondsToYears = seconds => {
  const SECONDS_IN_YEAR = 31557600

  return Number((seconds / SECONDS_IN_YEAR).toFixed(2))
}

export const age = (planet, ageInSeconds) => {
  return secondsToYears(ageInSeconds / earthYears[planet])
}
