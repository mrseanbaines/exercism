export const encode = str => str.replace(/([\w\s])\1+/g, (match, char) => match.length + char)

export const decode = str => str.replace(/(\d+)([\w\s])/g, (_, num, char) => char.repeat(num))
