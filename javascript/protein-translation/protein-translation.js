const stopCodons = ['UAA', 'UAG', 'UGA']

const proteins = {
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
}

const isValidCodon = codon => {
  const validCodons = Object.values(proteins).flat()

  return validCodons.includes(codon)
}

const trimStopCodons = codons => {
  const stopCodonIndex = codons.findIndex(codon => stopCodons.includes(codon))

  if (stopCodonIndex !== -1) {
    return codons.slice(0, stopCodonIndex)
  }

  return codons
}

const getProteinFromCodon = codon => {
  const [protein] = Object.entries(proteins).find(([_, codons]) => codons.includes(codon))

  return protein
}

const chunkString = (str, length) => str.match(new RegExp(`\\w{1,${length}}`, 'g')) || []

export const translate = (RNA = '') => {
  const codons = chunkString(RNA, 3)

  return trimStopCodons(codons).map(codon => {
    if (!isValidCodon(codon)) {
      throw new Error('Invalid codon')
    }

    return getProteinFromCodon(codon)
  })
}
