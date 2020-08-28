const response = {
  statement: `Whatever.`,
  shouting: `Whoa, chill out!`,
  question: `Sure.`,
  forceful: `Calm down, I know what I'm doing!`,
  silence: `Fine. Be that way!`,
}

const isShouting = str => str.match(/[a-z]/i) && str.split('').every(l => l === l.toUpperCase())

const isQuestion = str => str.endsWith('?')

export const hey = message => {
  const str = message.trim()

  if (!str) {
    return response.silence
  }

  if (isShouting(str) && isQuestion(str)) {
    return response.forceful
  }

  if (isShouting(str)) {
    return response.shouting
  }

  if (isQuestion(str)) {
    return response.question
  }

  return response.statement
}
