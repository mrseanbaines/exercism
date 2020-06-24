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

const isValidCodon = (codon) => {
  const validCodons = Object.values(proteins).flat()

  return validCodons.includes(codon)
}

export const translate = (RNA = '') => {
  const codons = RNA.match(/\w{1,3}/g) || []
  const stopCodonIndex = codons.findIndex((codon) => stopCodons.includes(codon))

  return codons.slice(0, stopCodonIndex !== -1 ? stopCodonIndex : codons.length).map((codon) => {
    if (!isValidCodon(codon)) {
      throw new Error('Invalid codon')
    }

    const [protein] = Object.entries(proteins).find(([_, codons]) => codons.includes(codon))

    return protein
  })
}
