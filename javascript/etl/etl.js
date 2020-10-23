export const transform = oldSystem => {
  return Object.entries(oldSystem).reduce((newObj, [score, letters]) => {
    const newSystem = letters.reduce((all, letter) => {
      return {
        ...all,
        [letter.toLowerCase()]: Number(score),
      }
    }, {})

    return {
      ...newObj,
      ...newSystem,
    }
  }, {})
}
