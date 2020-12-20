export const rows = numRows => {
  let prevRow

  const triangle = Array.from(Array(numRows), (_, rowIndex) => {
    const row = Array.from(Array(rowIndex + 1), (__, numIndex) => {
      const leftNum = prevRow?.[numIndex - 1] || 0
      const rightNum = prevRow?.[numIndex] || 0

      return leftNum + rightNum || 1
    })

    prevRow = row

    return row
  })

  return triangle
}
