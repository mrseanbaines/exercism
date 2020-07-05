export const isPangram = sentence => {
  const alphabet = Array(26)
    .fill()
    .map((x, i) => String.fromCharCode('a'.charCodeAt() + i))

  return alphabet.every(char => sentence.toLowerCase().includes(char))
}
