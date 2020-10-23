export const compute = (strandA, strandB) => {
  if (!strandA && !!strandB) {
    throw new Error('left strand must not be empty')
  }

  if (!strandB && !!strandA) {
    throw new Error('right strand must not be empty')
  }

  if (strandA.length !== strandB.length) {
    throw new Error('left and right strands must be of equal length')
  }

  let diffCount = 0

  strandA.split('').forEach((char, i) => {
    if (strandB.charAt(i) !== char) {
      diffCount += 1
    }
  })

  return diffCount
}
