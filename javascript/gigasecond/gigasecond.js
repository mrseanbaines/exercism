export const gigasecond = (date) => {
  const gs = 1000000000 * 1000

  return new Date(Date.parse(date) + gs)
}
