//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  const segments = str.match(/([\w\s])(\1+)?/g) || []

  if (!segments.length) {
    return str
  }

  return segments.map((segment) => (segment.length > 1 ? segment.length : '') + segment.charAt(0)).join('')
}

export const decode = (str) => {
  const segments = str.match(/([\d]+)?([\w+\s])/g) || []

  if (!segments.length) {
    return str
  }

  return segments
    .map((segment) => segment.match(/([\d]+)?([\w+\s])/) || [segment])
    .map(([match, num, char]) => (num && char ? char.repeat(num) : match))
    .join('')
}
